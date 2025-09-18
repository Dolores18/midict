# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

mdict-rs is a web-based dictionary application built in Rust that parses and serves MDX format dictionary files. The application creates a local web server that allows users to query dictionary entries through a web interface.

**Key Features:**
- Parses MDX v2.0 dictionary files (with encryption levels 0 or 2)
- Creates SQLite indexes for fast lookups
- Serves a web interface on localhost:8181
- Supports multiple dictionary files simultaneously

## Architecture

### Core Components

**MDX Parser (`src/mdict/`)**
- `mdx.rs`: Main MDX file parser and entry point
- `header.rs`: Parses MDX file headers (version, encoding, encryption)
- `keyblock.rs`: Handles key block parsing and compression
- `recordblock.rs`: Manages record block decompression and data extraction

**Web Server (`src/handlers/`, `src/main.rs`)**
- Built with Axum framework
- Two main endpoints: `/query` (POST) and `/lucky` (GET)
- Serves static files from `resources/static/`
- Uses tower-http for serving static content

**Database Layer (`src/indexing/`, `src/query/`)**
- Converts MDX entries to SQLite databases for fast searching
- Creates `.db` files alongside `.mdx` files
- Handles multiple dictionary sources

**Configuration (`src/config/mod.rs`)**
- Defines which MDX files to load via `MDX_FILES` constant
- Configures static file serving paths

### Data Flow

1. **Startup**: MDX files are parsed and indexed into SQLite databases
2. **Query**: User searches trigger database lookups across all configured dictionaries
3. **Response**: First matching definition is returned with debugging information

## Common Development Commands

### Building and Running
```bash
# Build the project
cargo build

# Run the dictionary server
cargo run --bin mdict-rs

# Run with logging
RUST_LOG=info cargo run --bin mdict-rs

# Build for release
cargo build --release
```

### Development Tools
```bash
# Format code (uses custom rustfmt.toml configuration)
cargo fmt

# Check code without building
cargo check

# Run clippy for linting
cargo clippy

# Force reindexing of dictionaries
# Delete .db files in resources/mdx/ and restart
```

### Testing Dictionary Setup

1. Place `.mdx` files in `resources/mdx/[language]/` directories
2. Update `MDX_FILES` constant in `src/config/mod.rs`
3. Restart application to trigger indexing
4. Access http://localhost:8181 to test queries

### Working with MDX Files

**File Structure Requirements:**
- MDX files go in `resources/mdx/` subdirectories
- CSS files for dictionary styling go in `resources/static/`
- Application automatically creates `.db` index files alongside `.mdx` files

**Supported Formats:**
- MDX version 2.0 only
- Encryption levels: 0 (no encryption) or 2 (encrypted)
- Various compression formats (LZO, zlib, etc.)

## Development Considerations

### Adding New Dictionary Sources
1. Place MDX file in appropriate `resources/mdx/[language]/` directory
2. Add file path to `MDX_FILES` array in `src/config/mod.rs`
3. Restart application for indexing

### Query Debugging
The query system includes extensive debugging output showing:
- Hexadecimal byte analysis of definitions
- Character-by-character parsing information
- This helps debug encoding issues with different dictionary sources

### Static File Serving
- Web interface files in `resources/static/`
- Multiple CSS files for different dictionary styles
- JavaScript and jQuery for frontend functionality

### Error Handling
- Uses `anyhow` for error handling throughout
- Database connection errors are handled gracefully
- MDX parsing errors will prevent application startup

## File Structure Notes

```
src/
├── config/          # Configuration and file paths
├── handlers/        # Web request handlers
├── indexing/        # MDX to SQLite conversion
├── lucky/           # Random word selection
├── mdict/           # MDX file format parsing
├── query/           # Database query logic
└── util/            # Utility functions

resources/
├── static/          # Web interface files (HTML, CSS, JS)
└── mdx/            # Dictionary files (.mdx) and indexes (.db)
```

## Performance Notes

- Initial startup time depends on MDX file size (indexing on first run)
- Subsequent startups are fast (uses existing .db files)
- Query performance is excellent due to SQLite indexing
- Memory usage scales with number and size of loaded dictionaries
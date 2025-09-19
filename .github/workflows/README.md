# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automated building, testing, and releasing of the `mdict-rs` project.

## 📋 Available Workflows

### 1. `release.yml` - Build and Release
**Purpose**: Cross-platform binary builds and automated releases

**Triggers**:
- Push to `main`/`master` branch → Development release (`latest`)
- Push to tags starting with `v*` → Stable versioned release
- Pull requests → Build only (no release)
- Manual trigger via GitHub UI

**Platforms**:
- **Linux**: x86_64 GNU, x86_64 MUSL, ARM64
- **macOS**: Intel (x86_64), Apple Silicon (ARM64)
- **Windows**: x86_64

### 2. `build-debian.yml` - Debian Package Build
**Purpose**: Creates `.deb` packages for Debian/Ubuntu systems

**Triggers**:
- Push to `main`/`master` branch
- Push to tags starting with `v*`
- Pull requests
- Manual trigger

## 🚀 Getting Started

### Creating Your First Release

1. **Development Release (Latest)**:
   ```bash
   # Simply push to main branch
   git add .
   git commit -m "feat: add new feature"
   git push origin main
   ```
   
   This creates a development release at:
   - `https://github.com/YOUR_USERNAME/mdict-rs/releases/latest`

2. **Stable Release (Versioned)**:
   ```bash
   # Create and push a version tag
   git tag v1.0.0
   git push origin v1.0.0
   ```
   
   This creates a stable release at:
   - `https://github.com/YOUR_USERNAME/mdict-rs/releases/tag/v1.0.0`

### Manual Trigger

1. Go to your repository on GitHub
2. Click the "Actions" tab
3. Select "Build and Release" workflow
4. Click "Run workflow" button
5. Choose branch and click "Run workflow"

## 📦 Download Links

### Latest Development Build
Replace `YOUR_USERNAME` with your GitHub username:

**Linux**:
```bash
# Standard Linux (recommended for most servers)
wget https://github.com/YOUR_USERNAME/mdict-rs/releases/download/latest/mdict-rs-BUILDID-x86_64-unknown-linux-gnu

# Static build (works on older systems)
wget https://github.com/YOUR_USERNAME/mdict-rs/releases/download/latest/mdict-rs-BUILDID-x86_64-unknown-linux-musl

# ARM64 (Raspberry Pi, ARM servers)
wget https://github.com/YOUR_USERNAME/mdict-rs/releases/download/latest/mdict-rs-BUILDID-aarch64-unknown-linux-gnu
```

**macOS**:
```bash
# Intel Mac
curl -L -o mdict-rs https://github.com/YOUR_USERNAME/mdict-rs/releases/download/latest/mdict-rs-BUILDID-x86_64-apple-darwin

# Apple Silicon (M1/M2/M3)
curl -L -o mdict-rs https://github.com/YOUR_USERNAME/mdict-rs/releases/download/latest/mdict-rs-BUILDID-aarch64-apple-darwin
```

**Windows**:
```powershell
# Download from browser or use PowerShell
Invoke-WebRequest -Uri "https://github.com/YOUR_USERNAME/mdict-rs/releases/download/latest/mdict-rs-BUILDID-x86_64-pc-windows-msvc.exe" -OutFile "mdict-rs.exe"
```

### Version Information API

```bash
# Get latest build info
curl https://github.com/YOUR_USERNAME/mdict-rs/releases/download/latest/version.json

# Get specific version info  
curl https://github.com/YOUR_USERNAME/mdict-rs/releases/download/v1.0.0/version.json
```

Response example:
```json
{
  "version": "1.0.0",
  "build_identifier": "1.0.0",
  "commit_hash": "abc1234",
  "build_date": "2024-01-15T12:30:45Z",
  "is_release": true,
  "targets": [
    "x86_64-unknown-linux-gnu",
    "x86_64-unknown-linux-musl",
    "aarch64-unknown-linux-gnu",
    "x86_64-apple-darwin", 
    "aarch64-apple-darwin",
    "x86_64-pc-windows-msvc"
  ]
}
```

## 🛠️ Installation Instructions

### Linux/macOS Quick Start

```bash
# 1. Download binary (replace URL with your actual repository)
wget https://github.com/YOUR_USERNAME/mdict-rs/releases/download/latest/mdict-rs-BUILDID-x86_64-unknown-linux-gnu

# 2. Make executable and rename
chmod +x mdict-rs-*
mv mdict-rs-* mdict-rs

# 3. Optional: Move to PATH
sudo mv mdict-rs /usr/local/bin/

# 4. Run
mdict-rs
```

### Windows Quick Start

1. Download `.exe` file from releases page
2. Rename to `mdict-rs.exe` 
3. Run from Command Prompt or PowerShell

### Debian Package Installation

```bash
# Download latest .deb package
wget https://github.com/YOUR_USERNAME/mdict-rs/releases/download/latest/mdict-rs_VERSION_amd64.deb

# Install
sudo dpkg -i mdict-rs_VERSION_amd64.deb
sudo apt-get install -f  # Fix any missing dependencies

# Start service
sudo systemctl start mdict-rs
sudo systemctl enable mdict-rs  # Auto-start on boot

# Access application
open http://localhost:8181
```

## 🔧 Workflow Configuration

### Modifying Build Targets

To add/remove build targets, edit the `matrix.include` section in `release.yml`:

```yaml
matrix:
  include:
    # Add new target
    - os: ubuntu-latest
      target: armv7-unknown-linux-gnueabihf
      cross: true
      artifact_name: mdict-rs
      asset_name: mdict-rs-linux-armv7
```

### Environment Variables

The workflows use these environment variables:

- `CARGO_TERM_COLOR`: Always set to `always` for colored output
- `VERSION`: Generated version number
- `BUILD_IDENTIFIER`: Unique build identifier

### Caching Strategy

- **Rust dependencies**: Cached using `Swatinem/rust-cache@v2`
- **Cache key**: Based on OS, target, and `Cargo.lock` hash
- **Cache invalidation**: Automatic when dependencies change

## 📊 Monitoring Builds

### Check Build Status

1. **GitHub UI**: Go to Actions tab to see workflow runs
2. **Badge**: Add to your README.md:
   ```markdown
   ![Build Status](https://github.com/YOUR_USERNAME/mdict-rs/workflows/Build%20and%20Release/badge.svg)
   ```

### Common Issues and Solutions

**Build fails on cross-compilation**:
```yaml
# Make sure cross is installed and target is properly configured
- name: Install cross
  if: matrix.cross
  run: cargo install cross --git https://github.com/cross-rs/cross
```

**Missing dependencies on Linux**:
```yaml
# Add required system packages
- name: Install Linux dependencies
  if: matrix.os == 'ubuntu-latest'
  run: |
    sudo apt-get update
    sudo apt-get install -y libsqlite3-dev pkg-config build-essential
```

**Release creation fails**:
- Check GitHub token permissions
- Ensure repository has "Actions" enabled
- Verify tag format matches `v*` pattern

## 🔒 Security Notes

### Secrets and Tokens

- Workflows use `GITHUB_TOKEN` (automatically provided)
- No additional secrets required for basic functionality
- Keep sensitive data in GitHub Secrets, never in workflow files

### Dependency Security

```yaml
# Dependencies are cached but verified
- name: Cache Rust dependencies
  uses: Swatinem/rust-cache@v2
  with:
    cache-on-failure: true  # Cache even if build fails
```

## 🚦 Best Practices

### Version Tagging

```bash
# Use semantic versioning
git tag v1.0.0      # Major release
git tag v1.0.1      # Patch release  
git tag v1.1.0      # Minor release
git tag v2.0.0      # Breaking changes

# Include release notes
git tag -a v1.0.0 -m "Release version 1.0.0

- Added new feature X
- Fixed bug Y
- Improved performance Z"
```

### Branch Protection

Consider setting up branch protection rules:
1. Go to Settings → Branches
2. Add rule for `main` branch:
   - Require status checks to pass
   - Require branches to be up to date
   - Include administrators

### Release Management

**For stable releases**:
- Always tag from `main` branch
- Test thoroughly before tagging
- Write detailed release notes
- Follow semantic versioning

**For development releases**:
- Automatic on every `main` push
- Marked as "pre-release"
- Contains latest features but may be unstable

## 📝 Customization

### Adding New Workflow

1. Create new `.yml` file in `.github/workflows/`
2. Define triggers, jobs, and steps
3. Test with small changes first
4. Document in this README

### Workflow Templates

**Basic CI workflow**:
```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions-rs/toolchain@v1
        with:
          toolchain: stable
      - run: cargo test
```

## 🆘 Troubleshooting

### Common Errors

**"No space left on device"**:
- Workflows have limited disk space
- Remove unnecessary files during build
- Use `df -h` to check space usage

**"Permission denied"**:
- Check file permissions in repository
- Ensure executable bits are set correctly
- Verify GitHub token permissions

**"Cross compilation failed"**:
- Verify target is installed: `rustup target list --installed`
- Check cross-compilation setup in workflow
- Review target-specific dependencies

### Getting Help

1. Check GitHub Actions logs for detailed error messages
2. Review this documentation for configuration issues
3. Check Rust/Cargo documentation for build issues
4. Open GitHub issue with:
   - Workflow run link
   - Error messages
   - Steps to reproduce

---

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Rust Cross Compilation](https://rust-lang.github.io/rustup/cross-compilation.html)
- [Cross Tool Documentation](https://github.com/cross-rs/cross)
- [Semantic Versioning](https://semver.org/)

---

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username in all URLs and examples above.
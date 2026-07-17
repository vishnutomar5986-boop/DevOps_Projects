# Server Health Monitor

A Bash scripting project that monitors server health on a Linux machine.

## Features

- CPU Usage Monitoring
- Memory Usage Monitoring
- Disk Usage Monitoring
- Warning Thresholds
- Timestamped Logs
- Daily Log Files
- Cron Automation
- Email Alert using Gmail SMTP (Postfix)
- Support for Multiple Email Recipients

## Technologies

- Bash
- Linux
- Cron
- Postfix
- Gmail SMTP
- Mailutils

## Project Structure

```
Project-01-Server-Health-Monitor/
│
├── scripts/
│   └── health_monitor.sh
│
├── logs/
│   └── .gitkeep
│
├── screenshots/
│
└── README.md
```

## Run

```bash
chmod +x scripts/health_monitor.sh
./scripts/health_monitor.sh
```

## Email Alerts

The project supports automatic email notifications whenever CPU, Memory, or Disk usage exceeds the configured threshold.

The alert system uses:

- Gmail SMTP
- Postfix
- Mailutils

Configuration instructions are available in:

- `docs/Gmail-SMTP-Setup.md`


## Sample Output
```text
========================================
      SERVER HEALTH MONITOR
========================================
Hostname      : aio-pr
Time          : 2026-07-14 12:11:16
----------------------------------------
CPU Usage     : 0%    [OK]
Memory Usage  : 5%    [OK]
Disk Usage    : 4%    [OK]
========================================

```
## Screenshots

### Project Structure

![Project Structure](screenshots/01-project-structure.png)

### Script Output

![Script Output](screenshots/02-script-output.png)

### Log File

![Log File](screenshots/03-log-file.png)

### Cron Job

![Cron Job](screenshots/04-cron-job.png)

---

## Git Commit History

This project follows a proper Git workflow with multiple commits during development.

![Git Commit History](screenshots/05-git-commit-history.png)

---

# Documentation

Detailed setup and configuration guides are available in the `docs/` directory.

| Document | Description |
|----------|-------------|
| [Installation.md](docs/Installation.md) | Installation and initial project setup on Ubuntu |
| [Gmail-SMTP-Setup.md](docs/Gmail-SMTP-Setup.md) | Configure Gmail SMTP with Postfix for email alerts |
| [Troubleshooting.md](docs/Troubleshooting.md) | Common issues, fixes, and debugging steps |

---

# Installation Guide

This guide explains how to set up the Server Health Monitor project on Ubuntu Linux.

---

## 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/DevOps_Projects.git
cd DevOps_Projects/Project-01-Server-Health-Monitor
```

---

## 2. Install Required Packages

Update the package index.

```bash
sudo apt update
```

Install the required utilities.

```bash
sudo apt install mailutils postfix -y
```

During the Postfix installation select:

- Internet Site

Press **OK** to continue.

---

## 3. Make the Script Executable

```bash
chmod +x scripts/health_monitor.sh
```

---

## 4. Configure Thresholds

Open the script.

```bash
vim scripts/health_monitor.sh
```

Modify the threshold values if required.

```bash
CPU_THRESHOLD=90
MEMORY_THRESHOLD=80
DISK_THRESHOLD=80
```

---

## 5. Configure Alert Recipients

Update the EMAILS array.

```bash
EMAILS=(
    "admin@example.com"
    "support@example.com"
)
```

---

## 6. Run the Script

```bash
./scripts/health_monitor.sh
```

---

## 7. Automate Using Cron

Edit cron.

```bash
crontab -e
```

Example (every 5 minutes):

```cron
*/5 * * * * /home/ubuntu/DevOps_Projects/Project-01-Server-Health-Monitor/scripts/health_monitor.sh
```

---

The server health will now be monitored automatically.

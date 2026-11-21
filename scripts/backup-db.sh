#!/usr/bin/env bash
set -euo pipefail

BACKUP_DIR="/opt/backups/portfolio"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
mkdir -p "$BACKUP_DIR"

docker compose exec -T db pg_dump -U "${POSTGRES_USER:-portfolio_user}" "${POSTGRES_DB:-portfolio_db}" \
  | gzip > "$BACKUP_DIR/portfolio_${TIMESTAMP}.sql.gz"

# نگهداری بکاپ‌های ۱۴ روز اخیر
find "$BACKUP_DIR" -type f -name "*.sql.gz" -mtime +14 -delete
echo "Backup completed: portfolio_${TIMESTAMP}.sql.gz"
#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

OUTPUT_DIR="output"
mkdir -p "$OUTPUT_DIR"

# ---------- 章节目录 ----------

zh_chapters=(
  "chapters/00-序章"
)

# ---------- 构建函数 ----------

build_pdf() {
  local lang=$1
  local metadata=$2
  local output_name=$3
  local filter=$4
  shift 4
  local chapters=("$@")

  # 收集源文件
  local sources=()
  for chapter in "${chapters[@]}"; do
    while IFS= read -r f; do
      sources+=("$f")
    done < <(find "$chapter" -name '*.md' -maxdepth 1 | sort)
  done

  if [ ${#sources[@]} -eq 0 ]; then
    echo "Warning: no markdown files found for $lang, skipping" >&2
    return
  fi

  echo "Building $lang PDF (${#sources[@]} files)..."
  pandoc "$metadata" "${sources[@]}" \
    --from markdown \
    --lua-filter="$filter" \
    --pdf-engine=typst \
    -V template=book-conf.typst \
    -M toc=false \
    --output "$OUTPUT_DIR/$output_name"
  echo "  -> $OUTPUT_DIR/$output_name"
}

# ---------- 构建 ----------

build_pdf "zh" "metadata.yaml" "Agent工程哲学.pdf" "pdf-filter.lua" "${zh_chapters[@]}"

echo "Done."

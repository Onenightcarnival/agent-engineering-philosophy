#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

OUTPUT_DIR="output"
mkdir -p "$OUTPUT_DIR"

# ---------- 章节目录 ----------

zh_chapters=(
  "chapters/00-序章"
  "chapters/01-寻找一个稳定的抽象"
  "chapters/02-模型不是员工"
  "chapters/03-岗位先于候选人"
  "chapters/04-上岗培训与职业证书"
  "chapters/05-工作电脑与职业履历"
  "chapters/06-试用期晋升与退休"
  "chapters/07-当团队里有很多agent"
  "chapters/08-不要复制人类组织病"
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

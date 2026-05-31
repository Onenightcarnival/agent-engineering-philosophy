-- pdf-filter.lua: PDF 构建专用过滤器
-- 1. 移除网页导航段落（"文章"、"阅读顺序"、"文章索引"）
-- 2. 建立三级标题层次：章(h1) → 文章(h2) → 段落(h3)

local skip_headings = {
  ["文章"] = true,
  ["阅读顺序"] = true,
  ["文章索引"] = true,
}

local function heading_text(el)
  return pandoc.utils.stringify(el)
end

-- 判断是否为章标题（"第X章 ..."）
-- Lua 的 . 只匹配单字节，中文字符是多字节 UTF-8，用 .+ 匹配
local function is_chapter_heading(text)
  return text:match("^第.+章") ~= nil
end

function Blocks(blocks)
  local result = {}
  local skipping = false
  local skip_level = 0

  for _, el in ipairs(blocks) do
    if el.t == "Header" then
      if skipping and el.level <= skip_level then
        skipping = false
      end

      local text = heading_text(el)

      if skip_headings[text] then
        skipping = true
        skip_level = el.level
      elseif not skipping then
        -- 章标题（"第X章 ..."）保持 h1，其余标题降一级
        if el.level == 1 and not is_chapter_heading(text) then
          el.level = 2
        elseif el.level >= 2 and not skip_headings[text] then
          el.level = el.level + 1
        end
      end
    end

    if not skipping then
      result[#result + 1] = el
    end
  end

  return result
end

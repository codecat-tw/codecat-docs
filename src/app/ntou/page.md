# 自動配置腳本

執行並載入檔案即可獲得配置文件

```python
import pdfplumber
import json
import os

def clean_course_name(name: str) -> str:
    if not name:
        return ""
    # 如果有換行符號，取第一行（通常是中文課名）
    if "\n" in name:
        return name.split("\n")[0].strip()
    return name.strip()

def extract_course_info(pdf_path):
    data = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            tables = page.extract_tables()
            for table in tables:
                for row in table[1:]:
                    if len(row) >= 8:
                        course_name = row[3].strip() if row[3] else ""
                        course_time = row[7].strip() if row[7] else ""
                        # 清理課程名稱
                        course_name = clean_course_name(course_name)
                        data.append({
                            "course_name": course_name,
                            "course_time": course_time
                        })
    return data

if __name__ == '__main__':
    pdf_path = r'C:\Users\User\Desktop\resource\input\example.pdf'
    result_dir = r'C:\Users\User\Desktop\resource\result'
    os.makedirs(result_dir, exist_ok=True)

    courses = extract_course_info(pdf_path)
    output_path = os.path.join(result_dir, "courses.json")

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(courses, f, ensure_ascii=False, indent=2)

    print(f"課程 JSON 已輸出到: {output_path}")
```

## 範例資料

```json
[
  {
    "course_name": "計算機概論",
    "course_time": "102/103/104"
  },
  {
    "course_name": "國文（上）（國文",
    "course_time": "106/107"
  },
  {
    "course_name": "微積分",
    "course_time": "108/109/204"
  },
  {
    "course_name": "英文(大一英文)",
    "course_time": "201/202"
  },
  {
    "course_name": "計算機概論實習",
    "course_time": "206/207"
  },
  {
    "course_name": "程式設計實習",
    "course_time": "306/307/308"
  },
  {
    "course_name": "離散數學",
    "course_time": "402/403/404"
  },
  {
    "course_name": "產學巡禮導論",
    "course_time": "406"
  },
  {
    "course_name": "人工智慧概論",
    "course_time": "407/408"
  },
  {
    "course_name": "程式設計",
    "course_time": "502/503/504"
  },
  {
    "course_name": "排球(初)",
    "course_time": "506/507"
  }
]
```

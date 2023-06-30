def process_book_line(line):
    line = line.replace("--", "-")
    line = line.replace("’", "\\'")
    line = line.replace("-", "-")
    line = line.replace("--", "-")
    if "–" in line:
        author, title = line.split("–")
        # Remove any leading or trailing white space
        author = author.strip()
        title = title.strip()

        # Remove other unwanted characters here if necessary
        # (e.g., asterisks, quote marks, etc.)

        return f'new Book("{title}", "{author}")'
    else:
        return None

def generate_js_code(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()

    js_code_lines = []
    for i, line in enumerate(lines, 1):
        book_str = process_book_line(line)
        if book_str:
            js_code_lines.append(f"var book{i} = {book_str};")

    return "\n".join(js_code_lines)

# Use the function
js_code = generate_js_code("/Users/endersion/Documents/Repositories/JavaScript/Basic_JavaScript_Projects/Project6_ternary__operators_constructors/Python/book_list.txt")

# Write the output to a JS file
with open("book_vars.js", 'w') as f:
    f.write(js_code)

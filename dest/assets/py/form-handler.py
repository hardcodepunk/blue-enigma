from flask import request, render_template

@app.route("../dest/assets/py/form-handler.py", methods=["GET", "POST"])
def my_form():
    if request.method == 'POST':
        reply_to = request.form.get('email')
        message = request.form.get('message')
        # send_email(message, reply_to)
    return render_template('my_form.html')

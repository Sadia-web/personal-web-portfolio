import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/mqkgbebw"
                method="POST"
            >
                <div class="form-group">
                    <input type="name" name="name" class="form-control" id="name" placeholder="Your name" required />
                </div>

                <div class="form-group">
                    <input type="email" name="email" class="form-control" id="email" placeholder="Your email" required />
                </div>

                <div class="form-group">
                    <textarea class="form-control" type="text" name="massage" id="text" rows="3" placeholder="Your message here" required></textarea>
                </div>

                {status === "SUCCESS" ? <p style={{ color: "green" }}>Thanks!</p> : <button className="btn btn-primary" type="submit">Submit</button>}
                {status === "ERROR" && <p style={{ color: "red" }}>An error has occurred</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}

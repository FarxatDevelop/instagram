import React from "react";

class Form extends React.Component {
  state = {
    email: "",
    aggrement: false,
  };
  handelValue = (e) => {
    this.setState({
      aggrement: e.target.checked,
    });
  };
  render() {
    return (
      <div>
        <h1>Easy-fizy contact form</h1>
        <div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" required />
            <br />
            <br />
            <input type="checkbox" id="aggrement" onChange={this.handelValue} />
            <label htmlFor="aggrement">Aggrement</label>
            <br />
            <br />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const { aggrement } = this.state;
                if (aggrement) {
                  alert("Congustalition");
                } else {
                  alert("Can nor fownt");
                }
              }}
            >
              --Sumbit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;

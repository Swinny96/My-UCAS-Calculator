import React, { Component } from "react";

const GradeUrl = "https://www.ucas.com/api/tariff/v1/view/";
const CourseUrl = "https://www.ucas.com/api/tariff/v1/list/";
var gradeclass = "";

export default class UCASCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [{}],
      courseid: "",
      value: "",
      courselist: [],
      gradelist: [],
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleAddRow = () => {
    var gradeField = document.getElementById("GradesSelection");
    var courseField = document.getElementById("CourseSelection");
    var mygrade = gradeField.options[gradeField.selectedIndex].text;
    var mycourse = courseField.options[courseField.selectedIndex].text;
    var x = document.getElementById("PointsID").innerHTML;
    var y = document.getElementById("GradesSelection").value;
    var z = Number(x) + Number(y);

    if (gradeField.selectedIndex === 0 && courseField.selectedIndex === 0) {
      alert("Please Select a Qualfication & a Grade");
    } else if (
      gradeField.selectedIndex > 0 &&
      courseField.selectedIndex === 0
    ) {
      alert("Please Select a Qualfication");
    } else if (
      gradeField.selectedIndex === 0 &&
      courseField.selectedIndex > 0
    ) {
      alert("Please Select a Grade");
    } else {
      document.getElementById("PointsID").innerHTML = z;
      const item = {
        name: mycourse,
        grade: mygrade,
        points: gradeField.value,
      };
      this.setState({
        rows: [...this.state.rows, item],
      });
    }
  };
  handleRemoveRow = () => {
    const rows = [...this.state.rows];
    var y = rows[rows.length - 1].points;
    var x = document.getElementById("PointsID").innerHTML;
    var z = Number(x) - Number(y);

    document.getElementById("PointsID").innerHTML = z;
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    var y = rows[idx].points;
    rows.splice(idx, 1);
    this.setState({ rows });
    var x = document.getElementById("PointsID").innerHTML;

    var z = Number(x) - Number(y);
    document.getElementById("PointsID").innerHTML = z;
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onChange = ({ target: { value } }) => {
    [gradeclass] = [value];
    this.setState({ courseid: value });
    this.getCourseGrades();
  };
  async getCourseGrades() {
    const grade_url = [GradeUrl] + [gradeclass];
    const grade_response = await fetch(grade_url);
    const grade_data = await grade_response.json();
    var grade_result = [];
    for (var i in grade_data) grade_result.push([i, grade_data[i]]);
    this.setState({ gradelist: grade_result, loading: false });
  }

  async componentDidMount() {
    const courses_url = [CourseUrl];
    const courses_response = await fetch(courses_url);
    const courses_data = await courses_response.json();
    var courses_result = [];
    for (var i in courses_data) courses_result.push([i, courses_data[i]]);
    courses_result.sort(function (a, b) {
      var a1 = a[1],
        b1 = b[1];
      if (a1 === b1) return 0;

      //Put A and AS Level qualifications first, then a-z
      if (a1 === "A level") return -1;
      if (b1 === "A level") return 1;
      if (a1 === "A level (9 unit award)") return -1;
      if (b1 === "A level (9 unit award)") return 1;
      if (a1 === "A level Double Award") return -1;
      if (b1 === "A level Double Award") return 1;
      if (a1 === "AS") return -1;
      if (b1 === "AS") return 1;
      if (a1 === "AS Double award") return -1;
      if (b1 === "AS Double award") return 1;

      if (
        a1 ===
        "Pearson BTEC Level 3 National Certificate (first teaching from September 2016)"
      )
        return -1;
      if (
        b1 ===
        "Pearson BTEC Level 3 National Certificate (first teaching from September 2016)"
      )
        return 1;
      if (
        a1 ===
        "Pearson BTEC Level 3 National Diploma (first teaching from September 2016)"
      )
        return -1;
      if (
        b1 ===
        "Pearson BTEC Level 3 National Diploma (first teaching from September 2016)"
      )
        return 1;
      if (
        a1 ===
        "Pearson BTEC Level 3 National Extended Certificate (first teaching from September 2016)"
      )
        return -1;
      if (
        b1 ===
        "Pearson BTEC Level 3 National Extended Certificate (first teaching from September 2016)"
      )
        return 1;
      if (
        a1 ===
        "Pearson BTEC Level 3 National Extended Diploma (first teaching from September 2016)"
      )
        return -1;
      if (
        b1 ===
        "Pearson BTEC Level 3 National Extended Diploma (first teaching from September 2016)"
      )
        return 1;
      if (
        a1 ===
        "Pearson BTEC Level 3 National Foundation Diploma (first teaching from September 2016)"
      )
        return -1;
      if (
        b1 ===
        "Pearson BTEC Level 3 National Foundation Diploma (first teaching from September 2016)"
      )
        return 1;

      return a1 > b1 ? 1 : -1;
    });
    this.setState({ courselist: courses_result, loading: false });
  }

  render() {
    return (
      <div className={this.props.container} id="mainElement">
        <div className={this.props.container_inner}>
          <div className={this.props.top}>
              <h4 className={this.props.header}>UCAS Points Calculator</h4>
              <p className={this.props.text}>
                Working out your UCAS points can be a pain - especially when you
                have different types of qualifications. Luckily, our calculator
                is here to help. Just add your qualifications and let our UCAS
                Calculator do the maths!
              </p>
            <div className={this.props.qualfication_container}>
              <div className={this.props.qualfication_container_split}>
                <div className={this.props.qualfication_container_qualifcation}>
                  <span className={this.props.qualfication_text}>
                    Qualfication
                  </span>
                  <select
                    className={this.props.select}
                    id="CourseSelection"
                    onChange={this.onChange}
                  >
                    <option value="0">Select an Qualfication</option>
                    {this.state.courselist.map((i) => (
                      <option key={i[0]} value={i[0]} id={i[1]}>
                        {i[1]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={this.props.qualfication_container_grade}>
                  <span className={this.props.qualfication_text}>Grade</span>
                  <select
                    className={this.props.select}
                    id="GradesSelection"
                    onChange={this.handleChange}
                  >
                    <option value="0">Select an Grade</option>
                    {this.state.gradelist.map((i) => (
                      <option key={i[0]} value={i[1]} id={i[1]}>
                        {i[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button
              className={this.props.add_qualfication}
              onClick={this.handleAddRow}
            >
              Add Qualfication
            </button>
          </div>
          <hr />
          <table className={this.props.table}>
            <thead className={this.props.table_header}>
              <tr className={this.props.table_row}>
                <th className={this.props.table_head}>#</th>
                <th className={this.props.table_head}>Course</th>
                <th className={this.props.table_head}>Grade</th>
                <th className={this.props.table_head}>UCAS Points</th>
                <th className={this.props.table_head}>Action</th>
              </tr>
            </thead>
            <tbody className={this.props.table_body}>
              {this.state.rows.map((item, idx) => (
                <tr key={idx} className={this.props.table_body_row}>
                  <td className={this.props.table_body_details}>{idx}</td>
                  <td className={this.props.table_body_details} name="name">
                    {this.state.rows[idx].name}
                  </td>
                  <td className={this.props.table_body_details} name="grade">
                    {this.state.rows[idx].grade}
                  </td>
                  <td className={this.props.table_body_details} name="points">
                    {this.state.rows[idx].points}
                  </td>
                  <td className={this.props.table_body_details}>
                    <button
                      className={this.props.delete_qualfication}
                      onClick={this.handleRemoveSpecificRow(idx)}
                    >
                      <span className={this.props.delete_qualfication_text}>
                        Remove
                      </span>
                      <img
                        className={this.props.delete_qualfication_button}
                        src={this.props.remove_img}
                        alt="Remove Qualfication"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className={this.props.delete_last_qualfication}
            onClick={this.handleRemoveRow}
          >
            <span>Delete Last Qualfication</span>
          </button>
          <hr />
          <div className={this.props.points}>
            <div className={this.props.points_total}>
              <strong className={this.props.ponts_id} id="PointsID"></strong>
              UCAS Points
              <p>Your total UCAS points</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

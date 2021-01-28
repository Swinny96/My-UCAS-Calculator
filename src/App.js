import logo from "./logo.svg";
import "./App.css";
import UCASCalculator from "./Components/UCAS-Calculator";
import "./Calculator.css";

function App() {
  return (
    <div className="page_container">
      <header>
        <img className="ucas-logo" src={logo} alt="UCAS Logo" />
        <h1 className="header_text">Calculator</h1>
      </header>
      <main>
        <p className="ucas-context">
          Working out your UCAS points can be a pain - especially when you have
          different types of qualifications. Luckily, our calculator is here to
          help. Just add your qualifications and let our UCAS Calculator do the
          maths!
        </p>
        <UCASCalculator
          container="container"
          qualfication_container="qualfication_container"
          select="select"
          add_qualfication="add_qualfication"
          table="table"
          table_header="table_header"
          table_row="table_row"
          table_head="table_head"
          table_body="table_body"
          table_body_row="table_body_row"
          table_body_details="table_body_details"
          delete_qualfication="delete_qualfication"
          delete_last_qualfication="delete_last_qualfication"
          points="points"
          points_text="points_text"
          points_total="points_total"
        />
      </main>
    </div>
  );
}

export default App;

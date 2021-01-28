import logo from "./logo.svg";
import "./App.css";
import UCASCalculator from "./Components/UCAS-Calculator";
import "./Calculator.css";
import "./Undergraduate.css";
import remove from "./remove.svg"

function App() {
  return (
    <div className="page_container">
      <header>
        <img className="ucas-logo" src={logo} alt="UCAS Logo" />
        <h1 className="header_text">Calculator</h1>
      </header>
      <main>
        {/* <UCASCalculator
          container="container"
          heading=""
          header=""
          meta_text=""
          text=""
          qualfication_container="qualfication_container"
          qualfication_container_qualifcation=""
          qualfication_container_grade=""
          qualfication_text=""
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
          delete_qualfication_text=""
          delete_qualfication_button=""
          delete_last_qualfication="delete_last_qualfication"
          points="points"
          points_total="points_total"
          points_text="points_text"
        /> */}
        <UCASCalculator
          container="content_box"
          container_inner="content_box_inner"
          heading="content-box__heading"
          header="content-box__heading"
          meta_text="content_box_heading_meta_text"
          text="richtext"
          qualfication_container="qualfication_conetents"
          qualfication_container_qualifcation="qualfication_conetent_qualfication"
          qualfication_container_grade="qualfication_conetent_grade"
          qualfication_text="qualfication_conetents_text"
          select="qualfication_conetents_select"
          add_qualfication="qualfication_conetents_add"
          table="qualfication_table"
          table_header="qualfication_table_header"
          table_row="qualfication_table_row"
          table_head="qualfication_table_head"
          table_body="qualfication_table_body"
          table_body_row="qualfication_table_body_row"
          table_body_details="qualfication_table_body_details"
          delete_qualfication="qualfication_table_delete"
          delete_qualfication_text="qualfication_table_delete_text"
          delete_qualfication_button="qualfication_table_delete_button"
          remove_img={remove}
          delete_last_qualfication="qualfication_table_delete_last"
          points="key_info key-info_items"
          points_total="key-info_items-title-cta"
          points_text="key_info_items_title"
        />
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import UCASCalculator from "./Components/UCAS-Calculator";
import "./Calculator.css";
import "./Undergraduate.css";
import "./CSS/Col-1.css";
import "./CSS/2-Coll.css";
import "./CSS/Microcomponent.css";
import "./CSS/Microcomponent-2.css";
import remove from "./remove.svg";

function App() {
  return (
    <div className="page_container">
      <main>
        {/* Regualr Calc
        <UCASCalculator
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
        {/* Micro-UCAS         
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
        /> */}
        <UCASCalculator
          container="col_1_conatiner"
          container_inner="col_1_conatiner_inner"
          top="col_1_top"
          left="col_1_left"
          heading="col_1_heading"
          header="col_1_header"
          meta_text="col_1_meta_text"
          text="col_1_text"
          qualfication_container="col_1_qualfication"
          qualfication_container_split="col_1_qualfication_split"
          qualfication_container_qualifcation="col_1_qualfication_qual"
          qualfication_container_grade="col_1_qualfication_grade"
          qualfication_text="col_1_qualfication_text"
          select="col_1_select"
          add_qualfication="col_1_add"
          table="col_1_table"
          table_header="col_1_thead"
          table_row="col_1_tr"
          table_head="col_1_th"
          table_body="col_1_tbody"
          table_body_row="col_1_tbr"
          table_body_details="col_1_td"
          delete_qualfication="col_1_delete"
          delete_qualfication_text="col_1_delete_text"
          delete_qualfication_button="col_1_delete_btn"
          remove_img={remove}
          delete_last_qualfication="col_1_delete_last"
          points="col_1_points"
          points_total="col_1_points_total"
          points_text="col_1_points_text"
          points_txt="Your UCAS Points Total:"
          ponts_id="col_1_points_id"
        />
        {/* 1-Coll UCAS Calc
        <UCASCalculator
          container=""
          container_inner=""
          heading=""
          header=""
          meta_text=""
          text=""
          qualfication_container=""
          qualfication_container_qualifcation=""
          qualfication_container_grade=""
          qualfication_text=""
          select=""
          add_qualfication=""
          table=""
          table_header=""
          table_row=""
          table_head=""
          table_body=""
          table_body_row=""
          table_body_details=""
          delete_qualfication=""
          delete_qualfication_text=""
          delete_qualfication_button=""
          remove_img={remove}
          delete_last_qualfication=""
          points=""
          points_total=""
          points_text=""
        /> */}
        {/* 2-Coll UCAS Calc
        <UCASCalculator
          container=""
          container_inner=""
          heading=""
          header=""
          meta_text=""
          text=""
          qualfication_container=""
          qualfication_container_qualifcation=""
          qualfication_container_grade=""
          qualfication_text=""
          select=""
          add_qualfication=""
          table=""
          table_header=""
          table_row=""
          table_head=""
          table_body=""
          table_body_row=""
          table_body_details=""
          delete_qualfication=""
          delete_qualfication_text=""
          delete_qualfication_button=""
          remove_img={remove}
          delete_last_qualfication=""
          points=""
          points_total=""
          points_text=""
        /> */}
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useGetMyArticlesMutation } from '../../services/articles.service'
import { IArticle } from '../../interfaces/articles.interface'
 
const Dashboard = () => {
  const [getMyArticles, { data, error, isLoading }] = useGetMyArticlesMutation()
  const [articles, setArticles] = useState<IArticle[]>([])

  useEffect(() => {
    getMyArticles(null)
  }, [])

  useEffect(() => {
    if (data && !error) {
      setArticles(data)
      console.log('MayArticlesPage:: data:', data)
    } else if (error) {
      console.log(`MayArticlesPage:: Error getting articles`, error)
    }
  }, [data, error])

  return (
    <>
      <div className="patient_main_div">
        <div className="search_main_div">
            <div className="search_div">
                <form action="">
                    <input type="text" name="" id="" className="search_input" placeholder="Search by name" />
                    <img src="image/search_icon.svg" alt="" className="img-fluid search_icon" />
                </form>
            </div>
            <div className="patient_name_list">
                <div className="single_patient_div  ">
                    <h6 className="grey_color">Sumitra Kumar</h6>
                    <a href="">+91 888392883</a>
                </div>
                <div className="single_patient_div">
                    <h6 className="black_color">Chakrabarti Singh </h6>
                    <a href="">+91 888392883</a>
                    <span className="green_got"></span>
                </div>
                <div className="single_patient_div">
                    <h6 className="black_color">Ahluwalia Kumar</h6>
                    <a href="">+91 888392883</a>
                    <span className="green_got"></span>
                </div>
                <div className="single_patient_div active">
                    <h6 className="black_color">Mukesh Kumar</h6>
                    <a href="">+91 888392883</a>
                </div>
                <div className="single_patient_div">
                    <h6 className="black_color">Deshpande Kumar</h6>
                    <a href="">+91 888392883</a>
                </div>
                <div className="single_patient_div">
                    <h6 className="black_color">Krishna kamar singh</h6>
                    <a href="">+91 888392883</a>
                </div>
                <div className="single_patient_div">
                    <h6 className="black_color">Sumitra Kumar</h6>
                    <a href="">+91 888392883</a>
                </div>
                <div className="single_patient_div">
                    <h6 className="black_color">Krishna kamar singh</h6>
                    <a href="">+91 888392883</a>
                </div>
                
            </div>
            <div className="logout_div">
                <div className="logo_image">
                    <img src="image/logo.png" alt="" className="img-fluid" width="45" height="45" />
                </div>
                <div className="login_name">
                    <h6 className="black_color">Dr. Sumitra Sinha</h6>
                    <a href="" className="logout_button">Logout</a>
                </div>
            </div>
        </div>
        <div className="patient_plan_div">
            <div className="patient_name_div">
                <div className="single_patient_div">
                    <h6 className="black_color">Sumitra Kumar</h6>
                    <a href="" className="d-block">+91 888392883</a>
                    <a href="">name@gmail.com</a>
                </div>
            </div>
            <div className="different_profile_div">
                <div className="deit_plan_div profile_list">
                    <ul>
                        <li>
                            <div className="diet_div" id="profile">
                                <p className="black_color font-bold">Gut Profile</p>
                            </div>

                        </li>
                        <li>
                            <div className="diet_div" id="prior">
                                <p className="black_color font-bold">Prior Treatments</p>
                            </div>

                        </li>
                        <li>
                            <div className="diet_div" id="genereal_medicine">
                                <p className="black_color font-bold">General Medicine</p>
                            </div>

                        </li>
                        <li>
                            <div className="diet_div" id="lifestyle">
                                <p className="black_color font-bold">Lifestyle</p>
                            </div>

                        </li>
                        <li>
                            <div className="diet_div" id="mindfulness">
                                <p className="black_color font-bold">Mindfulness</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="select_deit_date pb-4">
                <div className="new_plan_div">
                    
                    <h6 className="black_color">Create Diet Plan</h6>
                </div>
                <div className="deit_date_div">
                    <input type="text" id="start_datepicker" placeholder="To Date" />
                    <input type="text" id="datepicker" placeholder="From Date" />
                    <div className="date_picker_image">
                        <img src="image/date_picker.svg" alt="" />
                    </div>
                </div>
                <div className="edit_delete_button">
                    <a href="" className="diet_button border_button">Create</a>
                </div>
            </div>

            <div className="deit_plan_div diet_date_active">
                <h6 className="black_color">Diet Plan</h6>
                <ul>
                    <li>
                        <div id="first_div" className="diet_div active">
                            <div className="single_diet_plan_div">
                                <div className="diet_plan_date_div">
                                    <span className="black_color font-bold">29 Jan - 04 Feb 2023 </span>
                                    <a href="" className="parrot_color">Published </a>
                                </div>

                                <div className="diet_plan_button_div">
                                    <a href="" className="black_color">Download PDF</a>
                                    <div className="diet_edit_button">
                                        <a href="">Edit</a>
                                        <a href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="second_div" className="diet_div">
                            <div className="single_diet_plan_div">
                                <div className="diet_plan_date_div">
                                    <span className="black_color font-bold">29 Jan - 04 Feb 2023 </span>
                                    <a href="" className="orange_color">Continue</a>
                                </div>

                                <div className="diet_plan_button_div">
                                    <a href="" className="black_color">Download PDF</a>
                                    <div className="diet_edit_button">
                                        <a href="">Edit</a>
                                        <a href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="third_div" className="diet_div">
                            <div className="single_diet_plan_div">
                                <div className="diet_plan_date_div">
                                    <span className="black_color font-bold">29 Jan - 04 Feb 2023 </span>
                                    <a href="" className="orange_color">Continue</a>
                                </div>

                                <div className="diet_plan_button_div">
                                    <a href="" className="black_color">Download PDF</a>
                                    <div className="diet_edit_button">
                                        <a href="">Edit</a>
                                        <a href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className="date_diet_div">
            <div className="single_diet_div" id="first_div" style={{ display:'block' }}>
                <div className="description_div">
                    <div className="description_inner_div">
                        <div className="description_heading_div border_bottom">
                            <span className="black_color font-bold">29 Jan - 04 Feb 2023</span>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="create_meal-tab" data-bs-toggle="tab"
                                        data-bs-target="#create_meal" type="button" role="tab"
                                        aria-controls="create_meal" aria-selected="true">Create Meal Plan</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false">Guideline</button>
                                </li>
                            </ul>
                        </div>
                        <div className="description_text_siv">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane" id="create_meal-tab" role="tabpanel"
                                    aria-labelledby="create_meal-tab" style={{ display:'block' }}>
                                    <textarea name="textarea" className="jqte-test">Type Meal Options</textarea>
                                    <div className="create_meal_plan_div border_bottom">
                                        <table className="meal_plan_table">
                                            <thead>
                                                <tr>
                                                    <td>
                                                        <div className="select_time_div">
                                                            <div className="time_div position-relative">
                                                                <input type="text" id="start_time"
                                                                    placeholder="Select Time" name="start_time"
                                                                      />
                                                                <img src="image/time_icon.svg" alt="" className="time_icon" />
                                                            </div>
                                                            <div className="custom-select">
                                                                <select>
                                                                    <option value="0">Select Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="" className="diet_button orange_button">Add This</a>
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="finsh_publish_div">
                                        <a href="" className="diet_button border_button">Final Publish</a>
                                    </div>
                                </div>

                                <div className="tab-pane" id="profile-tab" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="create_meal_plan_div border_bottom">
                                        <textarea name="textarea" className="jqte-test">Type Meal Options</textarea>
                                        <table className="meal_plan_table">
                                            <thead>
                                                <tr>
                                                    <td>
                                                        <div className="select_time_div">
                                                            <div className="time_div position-relative">
                                                                <input type="text" id="start_time"
                                                                    placeholder="Select Time" name="start_time"
                                                                     />
                                                                <img src="image/time_icon.svg" alt="" className="time_icon" />
                                                            </div>
                                                            <div className="custom-select">
                                                                <select>
                                                                    <option value="0">Select Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="" className="diet_button orange_button">Add This</a>
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="finsh_publish_div">
                                            <a href="" className="diet_button border_button">Final Publish</a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single_diet_div" id="second_div">
                <div className="description_div">
                    <div className="description_inner_div">
                        <div className="description_heading_div border_bottom">
                            <span className="black_color font-bold">29 Jan - 04 Feb 2023</span>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="create_meal-tab" data-bs-toggle="tab"
                                        data-bs-target="#create_meal" type="button" role="tab"
                                        aria-controls="create_meal" aria-selected="true">Create Meal Plan</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false">Guideline</button>
                                </li>
                            </ul>
                        </div>
                        <div className="description_text_siv">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane" id="create_meal-tab" role="tabpanel"
                                    aria-labelledby="create_meal-tab" style={{ display:'block' }}>
                                    <textarea name="textarea" className="jqte-test">Type Meal Options</textarea>
                                    <div className="create_meal_plan_div border_bottom">
                                        <table className="meal_plan_table">
                                            <thead>
                                                <tr>
                                                    <td>
                                                        <div className="select_time_div">
                                                            <div className="time_div position-relative">
                                                                <input type="text" id="start_time"
                                                                    placeholder="Select Time" name="start_time"
                                                                     />
                                                                <img src="image/time_icon.svg" alt="" className="time_icon" />
                                                            </div>
                                                            <div className="custom-select">
                                                                <select>
                                                                    <option value="0">Select Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="" className="diet_button orange_button">Add This</a>
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="finsh_publish_div">
                                        <a href="" className="diet_button border_button">Final Publish</a>
                                    </div>
                                </div>

                                <div className="tab-pane" id="profile-tab" role="tabpanel" aria-labelledby="profile-tab">
                                    <textarea name="textareas" className="jqte-test">Type Meal Options</textarea>
                                    <div className="create_meal_plan_div border_bottom">
                                        <table className="meal_plan_table">
                                            <thead>
                                                <tr>
                                                    <td>
                                                        <div className="select_time_div">
                                                            <div className="time_div position-relative">
                                                                <input type="text" id="start_time"
                                                                    placeholder="Select Time" name="start_time"
                                                                      />
                                                                <img src="image/time_icon.svg" alt="" className="time_icon" />
                                                            </div>
                                                            <div className="custom-select">
                                                                <select>
                                                                    <option value="0">Select Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="" className="diet_button orange_button">Add This</a>
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="finsh_publish_div">
                                        <a href="" className="diet_button border_button">Final Publish</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single_diet_div" id="third_div">
                <div className="description_div">
                    <div className="description_inner_div">
                        <div className="description_heading_div border_bottom">
                            <span className="black_color font-bold">29 Jan - 04 Feb 2023</span>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="create_meal-tab" data-bs-toggle="tab"
                                        data-bs-target="#create_meal" type="button" role="tab"
                                        aria-controls="create_meal" aria-selected="true">Create Meal Plan</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false">Guideline</button>
                                </li>
                            </ul>
                        </div>
                        <div className="description_text_siv">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane" id="create_meal-tab" role="tabpanel"
                                    aria-labelledby="create_meal-tab" style={{ display:'block' }}>
                                    <textarea name="textarea" className="jqte-test">Type Meal Options</textarea>
                                    <div className="create_meal_plan_div border_bottom">
                                        <table className="meal_plan_table">
                                            <thead>
                                                <tr>
                                                    <td>
                                                        <div className="select_time_div">
                                                            <div className="time_div position-relative">
                                                                <input type="text" id="start_time"
                                                                    placeholder="Select Time" name="start_time"
                                                                     />
                                                                <img src="image/time_icon.svg" alt="" className="time_icon" />
                                                            </div>
                                                            <div className="custom-select">
                                                                <select>
                                                                    <option value="0">Select Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="" className="diet_button orange_button">Add This</a>
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="finsh_publish_div">
                                        <a href="" className="diet_button border_button">Final Publish</a>
                                    </div>
                                </div>

                                <div className="tab-pane" id="profile-tab" role="tabpanel" aria-labelledby="profile-tab">
                                    <textarea name="textareas" className="jqte-test">Type Meal Options</textarea>
                                    <div className="create_meal_plan_div border_bottom">
                                        <table className="meal_plan_table">
                                            <thead>
                                                <tr>
                                                    <td>
                                                        <div className="select_time_div">
                                                            <div className="time_div position-relative">
                                                                <input type="text" id="start_time"
                                                                    placeholder="Select Time"
                                                                     name="start_time"
                                                                    />
                                                                <img src="image/time_icon.svg" alt="" className="time_icon" />
                                                            </div>
                                                            <div className="custom-select">
                                                                <select>
                                                                    <option value="0">Select Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="" className="diet_button orange_button">Add This</a>
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font-bold black_color pb-2">11:30 AM</p>
                                                        <p>5-7 nuts (soaked almonds/ pistas/ cashews/ walnuts)</p>
                                                    </td>
                                                    <td>
                                                        <div className="edit_delete_button">
                                                            <a href="" className="diet_button border_button">Delete</a>
                                                            <a href="" className="diet_button border_button">Edit</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="finsh_publish_div">
                                        <a href="" className="diet_button border_button">Final Publish</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single_diet_div" id="profile">
                <div className="description_div">
                    <p className="orange_color font-400">Section 1</p>
                    <h6 className="black_color font-bold pb-4 border-bottom pt-2">Help us understand your symptoms better to
                        diagnose properly with the following questions</h6>
                    <div className="sub_question mt-4">

                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Do you experience any of the following?</h6>
                            <p>Throat discomfort, Acidic Taste in mouth, Feeling of regurgitation, Trouble Swallowing
                                Food Cough
                            </p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single_diet_div" id="prior">
                <div className="description_div">
                    <p className="orange_color font-400">Section 1</p>
                    <h6 className="black_color font-bold pb-4 border-bottom pt-2">Help us understand your symptoms better to
                        diagnose properly with the following questions</h6>
                    <div className="sub_question mt-4">
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Do you experience any of the following?</h6>
                            <p>Throat discomfort, Acidic Taste in mouth, Feeling of regurgitation, Trouble Swallowing
                                Food Cough
                            </p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Do you experience any of the following?</h6>
                            <p>Throat discomfort, Acidic Taste in mouth, Feeling of regurgitation, Trouble Swallowing
                                Food Cough
                            </p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single_diet_div" id="genereal_medicine">
                <div className="description_div">
                    <p className="orange_color font-400">Section 1</p>
                    <h6 className="black_color font-bold pb-4 border-bottom pt-2">Help us understand your symptoms better to
                        diagnose properly with the following questions</h6>
                    <div className="sub_question mt-4">
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Do you experience any of the following?</h6>
                            <p>Throat discomfort, Acidic Taste in mouth, Feeling of regurgitation, Trouble Swallowing
                                Food Cough
                            </p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Do you experience any of the following?</h6>
                            <p>Throat discomfort, Acidic Taste in mouth, Feeling of regurgitation, Trouble Swallowing
                                Food Cough
                            </p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single_diet_div" id="lifestyle">
                <div className="description_div">
                    <p className="orange_color font-400">Section 1</p>
                    <h6 className="black_color font-bold pb-4 border-bottom pt-2">Help us understand your symptoms better to
                        diagnose properly with the following questions</h6>
                    <div className="sub_question mt-4">
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Do you experience any of the following?</h6>
                            <p>Throat discomfort, Acidic Taste in mouth, Feeling of regurgitation, Trouble Swallowing
                                Food Cough
                            </p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single_diet_div" id="mindfulness">
                <div className="description_div">
                    <p className="orange_color font-400">Section 1</p>
                    <h6 className="black_color font-bold pb-4 border-bottom pt-2">Help us understand your symptoms better to
                        diagnose properly with the following questions</h6>
                    <div className="sub_question mt-4">
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Do you experience any of the following?</h6>
                            <p>Throat discomfort, Acidic Taste in mouth, Feeling of regurgitation, Trouble Swallowing
                                Food Cough
                            </p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Do you experience any of the following?</h6>
                            <p>Throat discomfort, Acidic Taste in mouth, Feeling of regurgitation, Trouble Swallowing
                                Food Cough
                            </p>
                        </div>
                        <div className="single_question_list mb-5 ">
                            <h6 className="black_color font-600 pb-2">Any trigger foods that you suspect?</h6>
                            <p>Wheat, Milk, Sugar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}
export default Dashboard

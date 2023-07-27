/*
|---------------------------------------------------------------------------|
|                                                                           |
|            Institute Co-Director : Samuel Soren & Susanna Hansda           |
|        ____  __  __ _____ ___       ____           _     _                |
|       / ___||  \/  |_   _|_ _|     / ___| ___   __| | __| | __ _          |
|       \___ \| |\/| | | |  | |_____| |  _ / _ \ / _` |/ _` |/ _` |         |
|        ___) | |  | | | |  | |_____| |_| | (_) | (_| | (_| | (_| |         |
|       |____/|_|  |_| |_| |___|     \____|\___/ \__,_|\__,_|\__,_|         |
|                                                                           |
|                    Script Author & Maintainer                             |
|                ( https://github.com/sanjeevstephan )                      |
|                           Date : 26th-July-2023                           |
|---------------------------------------------------------------------------|
*/
/* Important Variables Across different web-page on the website get Populated from this Script!
   Note : Any Changes Made here,wil get affected across all the pages which have included below script

   |--------------------------------------------------------|
   |                                                        |
   |         <script src="data/smtigodda.js"></script>"     |
   |                                                        |
   |--------------------------------------------------------|
*/
const privacy = {
    showinstitute : "no",
    showauthor  : "yes",
    showcontact : "no"
}

const institute = {
    name : "Samsusan Multimedia & Technology Institute",
    address : "Address here!",
    district : "Godda",
    phone : "12345648",
    email : "smtigodda@gamil.com"
}
const thescript = {
    author : "SanjeevStephan",
    created : "26th July 2023",
    source : "https://github.com/sanjeevstephan/SMTI/"
}
const assets = {
    logo : "assets/smti-logo.png",
    logosize : "90px"
}





/*
    List of ID in use!
*/
var institute_name_id  = "id_institute_name";
var institute_addr_id  = "id_institute_address";
var institute_phone_id = "id_institute_phone";
var institute_email_id = "id_institute_email";
var institute_district_id = "id_institute_district";
var developed_by_id    = "id_developed_by" ;

/*
    Error Message to Display when primary-value not available
*/
var institute_name_error  = "Unable to display Institute Name!";
var institute_addr_error  = "Unable to display Address";
var institute_phone_error = "Unable to display Contact" ;
var institute_email_error  = "Unable to display Email" ;

/*
    The Logic of the Script ! NOTE : DONT MAKE ANY CHANGES! THIS WILL BREAK THE WEBSITE!
    CREATE 
*/
function display_smti_info(element_id,value_to_display) { document.getElementById(element_id).innerHTML = value_to_display; }

if (privacy.showinstitute == "yes") {
    display_smti_info(institute_name_id,institute.name);
    display_smti_info(institute_addr_id,institute.address);
    display_smti_info(institute_email_id,institute.email);
} else {
    display_smti_info(institute_name_id,institute_name_error);
    display_smti_info(institute_addr_id,institute_addr_error);
    display_smti_info(institute_email_id,institute_email_error);
}

if(privacy.showcontact == "yes") {  display_smti_info(institute_phone_id,institute.phone ); } else { display_smti_info(institute_phone_id,institute_phone_error); }

if(privacy.showauthor == "yes") {
    display_smti_info(developed_by_id,thescript.author);
}


display_smti_info(institute_district_id,institute.district);

document.getElementById("id_institute_logo").innerHTML = "<img src='" + assets.logo + "' width='" + assets.logosize+" ' />"
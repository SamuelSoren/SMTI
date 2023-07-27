/*
|---------------------------------------------------------------------------|
|                                                                           |
|            Institute Co-Director : Samuel Soren & Susana Hansda           |
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

   ->         <script src="smti.js"></script>"
*/
const institute = {
    name : "Samsusan Multimedia & Technology Institute",
    address : "Address here!",
    phone : "institute_phone",
    email : "institute_email"
}
const thescript = {
    author : "SanjeevStephan",
    created : "26th July 2023",
    source : "https://github.com/sanjeevstephan/SMTI/"
}



function display_smti_info(element_id,value_to_display) { document.getElementById(element_id).innerHTML = value_to_display; }


display_smti_info("id_institute_name",institute.name);
display_smti_info("id_institute_address",institute.address);
display_smti_info("id_developed_by",thescript.author);
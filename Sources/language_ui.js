function language_selector_ui(){
    removeElements();
    div_language = createDiv().id("language_div").class("language_div_style").parent("main");
    button_french = createButton('French').class('language_button_style').parent("language_div");
    button_english = createButton('English').class('language_button_style').parent("language_div");

    button_french.mouseClicked(ui_french);
    //button_english.mouseClicked(ui_english);
};

function ui_french(){
    removeElements();
    div_main_frame = createDiv().id("main_frame").class("main_frame_style").parent("main");

    //Control panel side
    div_controlpanel = createDiv().id("controlpanel").class("controlpanel_style").parent("main_frame");

    bone_selector_system();
    death_counter_system();

    //Greenlight side
    div_greenlum = createDiv().id("greenlum").class("greenlum_style").parent("main_frame");

    
    evidences()
    
    div_death_counter = createDiv().id("death_counter").parent("greenlum").class("death_counter_style");
    text_death_counter = createP('Nombre de mort :' + ' 0').parent('death_counter').class('text_death_counter_style');

    div_bone_state = createDiv().id("bone_state_div").parent("greenlum").class("death_counter_style");
    text_bone_state = createP('OS : Pas encore').parent('bone_state_div').class('text_death_counter_style');


    

}

function evidences(){
    div_evidences = createDiv().id("evidences").parent("greenlum").class("evidences_style");
    image_spirit = createImg(spirit.state_url[spirit.state],'Spirit Box').parent("evidences").mouseClicked(spirit_changer).class("images_styles");
    image_emf = createImg(emf.state_url[emf.state],'EMF 5').parent("evidences").mouseClicked(emf_changer).class("images_styles");;
    image_cold = createImg(cold.state_url[cold.state],'Température glaciale').parent("evidences").mouseClicked(cold_changer).class("images_styles");;
    image_writing = createImg(writing.state_url[writing.state],'Ecritures fantomatiques').parent("evidences").mouseClicked(writing_changer).class("images_styles");;
    image_dots = createImg(dots.state_url[dots.state],'DOTS').parent("evidences").mouseClicked(dots_changer).class("images_styles");;
    image_orbs = createImg(orbs.state_url[orbs.state],'Orbs fantomatiques').parent("evidences").mouseClicked(orbs_changer).class("images_styles");;
    image_prints = createImg(prints.state_url[prints.state],'Empreintes digitales').parent("evidences").mouseClicked(prints_changer).class("images_styles");
}

function death_counter_system(){
    div_death_counter_input = createDiv().id("death_counter_input").class("death_counter_input_style").parent("controlpanel");
    inputbox_death_count = createInput();
    inputbox_death_count.parent('death_counter_input').class('controlpanel_input_style').attribute('placeholder', 'nombre de mort');
    button_submit = createButton('validé').parent('death_counter_input').class('controlpanel_buttons');
    button_submit.mouseClicked(update_death_counter);
}

function bone_selector_system(){
    div_bone_input = createDiv().id("bone_input").class("bone_input_style").parent("controlpanel");
    createP("Os : ").parent('bone_input').class('controlpanel_text_style');
    bone_selctor = createSelect().parent("bone_input").class('controlpanel_selector_style');
    bone_selctor.option('Pas trouvé');
    bone_selctor.option('Trouvé');
    bone_selctor.selected('Pas trouvé');
    bone_selctor.changed(bone_selector_change);
}

function update_death_counter(){
    if (inputbox_death_count.value().length < 1 || inputbox_death_count.value().includes("  ")){
        inputbox_death_count.value('');
    } else {
        text_death_counter.html('Nombre de mort : ' + inputbox_death_count.value());
        inputbox_death_count.value('');
    }
}

function bone_selector_change(){
    text_bone_state.html('OS : ' + bone_selctor.value());
}
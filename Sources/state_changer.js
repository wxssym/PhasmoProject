function spirit_changer(){
    if (spirit.state == 0) {
        state_checker();
        if (total_states<number_of_evidences){
            spirit.state = 1;
            image_spirit.style('content', 'url('+spirit.state_url[spirit.state]+')');
        }

    } else {
        spirit.state = 0;
        image_spirit.style('content', 'url('+spirit.state_url[spirit.state]+')');
    }
};

function emf_changer(){
    if (emf.state == 0) {
        state_checker();
        if (total_states<number_of_evidences){
        emf.state = 1;
        image_emf.style('content', 'url('+emf.state_url[emf.state]+')');
        }
    } else {
        emf.state = 0;
        image_emf.style('content', 'url('+emf.state_url[emf.state]+')');
    }
};

function cold_changer(){
    if (cold.state == 0) {
        state_checker();
        if (total_states<number_of_evidences){
        cold.state = 1;
        image_cold.style('content', 'url('+cold.state_url[cold.state]+')');
        }
    } else {
        cold.state = 0;
        image_cold.style('content', 'url('+cold.state_url[cold.state]+')');
    }
};

function writing_changer(){
    if (writing.state == 0) {
        state_checker();
        if (total_states<number_of_evidences){
        writing.state = 1;
        image_writing.style('content', 'url('+writing.state_url[writing.state]+')');
        }
    } else {
        writing.state = 0;
        image_writing.style('content', 'url('+writing.state_url[writing.state]+')');
    }
};

function dots_changer(){
    if (dots.state == 0) {
        state_checker();
        if (total_states<number_of_evidences){
        dots.state = 1;
        image_dots.style('content', 'url('+dots.state_url[dots.state]+')');
        }
    } else {
        dots.state = 0;
        image_dots.style('content', 'url('+dots.state_url[dots.state]+')');
    }
};

function orbs_changer(){
    if (orbs.state == 0) {
        state_checker();
        if (total_states<number_of_evidences){
        orbs.state = 1;
        image_orbs.style('content', 'url('+orbs.state_url[orbs.state]+')');
        }
    } else {
        orbs.state = 0;
        image_orbs.style('content', 'url('+orbs.state_url[orbs.state]+')');
    }
};

function prints_changer(){
    if (prints.state == 0) {
        state_checker();
        if (total_states<number_of_evidences){
        prints.state = 1;
        image_prints.style('content', 'url('+prints.state_url[prints.state]+')');
        }
    } else {
        prints.state = 0;
        image_prints.style('content', 'url('+prints.state_url[prints.state]+')');
    }
};

function state_checker(){
    total_states = 0;
    return total_states = prints.state + orbs.state + dots.state + writing.state + cold.state + emf.state + spirit.state;
}
//Precisamos de action para selecionar os mentores

const mentor = require('../models/Mentores')

class MentoresController {

    selectMentorAction(req, res) {

        mentor.selectAll(req, res)
    }
    
}

module.exports = new MentoresController;
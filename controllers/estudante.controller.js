const Estudante = require('../models/estudante.modelo');


const getAllEstudante = async (req, res) => {
    try {
        const estudantes = await Estudante.find();
        res.status(200).json(estudantes);
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter estudantes", error });
    }
};




const getEstudante = async (req, res) => {
    try {
        const { id } = req.params;
        const estudante = await Estudante.findByPk(id);

        if (!estudante) {
            return res.status(404).json({ message: "Estudante não encontrado" });
        }

        res.status(200).json(estudante);
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter estudante", error });
    }
};




const signupEstudante = async (req, res) => {
    try {
        const { nome, email, password } = req.body;

        
        if (!nome || !email || !password) {
            return res.status(400).json({ message: "Todos os campos são necessários" });
        }

        
        const novoEstudante = await Estudante.create({
            nome,
            email,
            password
        });

        res.status(201).json(novoEstudante);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar estudante", error });
    }
};



const loginEstudante = async (req, res) => {
    try {
        const { email, senha } = req.body;

        
        if (!email || !senha) {
            return res.status(400).json({ message: "Email e senha são necessários" });
        }

        
        const estudante = await Estudante.findOne({ where: { email } });
        if (!estudante) {
            return res.status(401).json({ message: "Email ou senha inválidos" });
        }

        
        const senhaValida = await bcrypt.compare(senha, estudante.senha);
        if (!senhaValida) {
            return res.status(401).json({ message: "Email ou senha inválidos" });
        }

        
        res.status(200).json({ id: estudante.id, nome: estudante.nome, email: estudante.email });
    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login", error });
    }
};



module.exports = {
    getEstudante,
    signupEstudante,
    loginEstudante,
    getAllEstudante,
};
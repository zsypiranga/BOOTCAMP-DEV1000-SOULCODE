class Medico {
    nome;
    especialidade;
    limiteDiario;
    pacientes;

    constructor(nome, especialidade, limiteDiario = 3) {
        const nomeLimpo = nome.trim();

        if (nomeLimpo.length === 0) {
            throw new Error("Nome do médico obrigatório.");
        }

        if (
            !Number.isInteger(limiteDiario) ||
            limiteDiario < 1 ||
            limiteDiario > 10
        ) {
            throw new Error("Limite diário inválido.");
        }

        this.nome = nomeLimpo;
        this.especialidade = especialidade;
        this.limiteDiario = limiteDiario;
        this.pacientes = [];
    }

    agendar(paciente) {
        const pacienteLimpo = paciente.trim();

        if (pacienteLimpo.length === 0) {
            throw new Error("Paciente obrigatório.");
        }

        if (this.pacientes.length >= this.limiteDiario) {
            throw new Error(`Agenda lotada: ${this.nome}.`);
        }

        this.pacientes.push(pacienteLimpo);
    }

    resumo() {
        const ocupacao =
            `${this.pacientes.length}/${this.limiteDiario}`;

        return `${this.nome} (${this.especialidade}): ${ocupacao} consultas`;
    }
}

// PARTE 1 - Cadastro dos médicos

const lucia = new Medico("Lúcia", "Cardiologia", 2);
const paulo = new Medico("Paulo", "Pediatria");

console.log(lucia.resumo());
console.log(paulo.resumo());

// Teste de cadastro inválido

try {
    const rita = new Medico("Rita", "Dermatologia", 0);
} catch (erro) {
    if (erro instanceof Error) {
        console.log(`Cadastro recusado: ${erro.message}`);
    }
}

// PARTE 2 - Agendamentos

function tentarAgendar(medico, paciente) {
    try {
        medico.agendar(paciente);
        console.log(`Agendado: ${paciente.trim()} com ${medico.nome}`);
    } catch (erro) {
        if (erro instanceof Error) {
            console.log(`Não agendado: ${erro.message}`);
        }
    }
}

tentarAgendar(lucia, "Ana");
tentarAgendar(lucia, "Bruno");
tentarAgendar(lucia, "Carla");
tentarAgendar(paulo, " ");
tentarAgendar(paulo, "Davi");

// PARTE 3 - Conferência da equipe

const equipe = [lucia, paulo];

for (const medico of equipe) {
    console.log(medico.resumo());

    for (const paciente of medico.pacientes) {
        console.log(`  - ${paciente}`);
    }
}
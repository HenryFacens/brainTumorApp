import { Alert } from 'react-native';

export default async function uploadFiles(selectedFiles, setImageUri, setComment) {
    try {
        const formData = new FormData();

        selectedFiles.forEach(file => {
            formData.append('files', {
                uri: file.uri,
                name: file.name,
                type: 'application/octet-stream',
            });

            // Determina o comentário com base no nome do arquivo
            let comment = ''; // Armazena o comentário temporariamente
            if (file.name.includes('patient001_predict.nii')) {
                comment = 'Necrótico e sem realce.\n' +
                    'Possíveis causas:\n' +
                    '\t1. AVC Isquêmico: Área cerebral com necrose devido à interrupção do fluxo sanguíneo.\n' +
                    '\t2. Trauma Craniano: Lesão que causou a morte do tecido cerebral sem inflamação ativa.\n' +
                    '\t3. Tumores em fase avançada: Tumores que desenvolveram necrose no interior.\n' +
                    '\t4. Hipóxia/Anóxia: Falta de oxigênio prolongada causando morte celular.\n';
            } else if (file.name.includes('patient002_predict.nii')) {
                comment = 'Edema peritumoral.\n' +
                    'Possíveis causas:\n' +
                    '\t1. Tumores cerebrais (gliomas, meningiomas): Acúmulo de líquido ao redor do tumor.\n' +
                    '\t2. Metástases cerebrais: Tumores secundários que provocam inchaço local.\n' +
                    '\t3. Abscessos cerebrais: Infecções que causam edema nas áreas próximas.\n' +
                    '\t4. Processos inflamatórios: Como encefalite ou reações autoimunes.\n';
            } else if (file.name.includes('patient003_predict.nii')) {
                comment = 'Tumor com realce Gd (gadolínio).\n' +
                    'Possíveis causas:\n' +
                    '\t1. Glioblastoma multiforme: Tumores malignos com alta vascularização.\n' +
                    '\t2. Meningiomas ou Metástases: Tumores que captam contraste por aumento do fluxo sanguíneo.\n' +
                    '\t3. Linfoma primário do SNC: Tumor vascularizado com captação de contraste.\n' +
                    '\t4. Processos inflamatórios: Algumas inflamações podem apresentar realce por contraste.\n';
            } else {
                comment = 'Arquivo sem diagnóstico identificado.\n' +
                    'Possíveis causas:\n' +
                    '1. Exame sem patologia relevante ou identificada.\n' +
                    '2. Lesões sutis ou em estágios iniciais.\n' +
                    '3. Falta de correlação clínica para interpretação dos achados.\n';
            }


            // Adiciona um pequeno delay antes de atualizar o comentário
            setTimeout(() => {
                setComment(comment); // Atualiza o estado após o atraso
            }, 6000); // 2 segundos de atraso
        });

        const response = await fetch('http://192.168.15.11:8080/blend-images', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error || 'Erro ao processar a requisição');
        }

        const blob = await response.blob();

        // Converte o blob em URI para exibição
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUri(reader.result);
        };
        reader.readAsDataURL(blob);

    } catch (error) {
        Alert.alert('Erro', error.message || 'Erro ao enviar os arquivos.');
        return null; // Retorna nulo em caso de erro
    }
}

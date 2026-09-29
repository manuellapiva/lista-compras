import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [produto, setProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState("");

  function adicionarProduto() {
    if (produto === "") {
      setErro("Digite um produto antes de adicionar!");
      return;
    }

    setProdutos([...produtos, produto]);
    setProduto("");
    setErro("");
  }

  function excluirProduto(index) {
    const novaLista = produtos.filter((_, i) => i !== index);
    setProdutos(novaLista);
  }

  function limparTudo() {
    setProdutos([]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.titulo}>Lista de Produtos</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um produto"
          value={produto}
          onChangeText={(texto) => {
            setProduto(texto);
            setErro("");
          }}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={adicionarProduto}
        >
          <Text style={styles.textoBotao}>ADICIONAR</Text>
        </TouchableOpacity>

        {erro !== "" && (
          <Text style={styles.erro}>{erro}</Text>
        )}

        <Text style={styles.subtitulo}>
          Produtos adicionados:
        </Text>

        {produtos.map((item, index) => (
          <View style={styles.produto} key={index}>
            <Text style={styles.textoProduto}>
              {item}
            </Text>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => excluirProduto(index)}
            >
              <Text style={styles.textoExcluir}>
                EXCLUIR
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        {produtos.length === 0 && (
          <Text style={styles.vazio}>
            Nenhum produto adicionado.
          </Text>
        )}

        {/* Botão para limpar tudo */}
        {produtos.length > 0 && (
          <TouchableOpacity
            style={styles.botaoLimpar}
            onPress={limparTudo}
          >
            <Text style={styles.textoLimpar}>
              LIMPAR TUDO
            </Text>
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C77DFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#E0AAFF",
    padding: 30,
    borderRadius: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#9D4EDD",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: "#9D4EDD",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },

  botao: {
    backgroundColor: "#9D4EDD",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  erro: {
    color: "red",
    marginTop: 8,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
  },

  produto: {
    backgroundColor: "#9D4EDD",
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
  },

  textoProduto: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#fff",
  },

  botaoExcluir: {
    backgroundColor: "#5A189A",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },

  textoExcluir: {
    color: "#fff",
    fontWeight: "bold",
  },

  botaoLimpar: {
    backgroundColor: "#5A189A",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },

  textoLimpar: {
    color: "#fff",
    fontWeight: "bold",
  },

  vazio: {
    color: "#252323",
    textAlign: "center",
    padding: 20,
  },
});
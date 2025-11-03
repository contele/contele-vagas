# 🐛 Contele Bug Bounty Challenge - React Native

> **Teste Prático ao Vivo** | Duração: ~3-4 horas | Formato: Resolução de Bugs Reais

---

## 📖 Sobre a CONTELE

Empresa do ramo de tecnologia, com forte atuação no mercado nacional em processo de expansão internacional. Projeto fixo, não é temporário. Projetos desafiadores e oportunidade de crescimento.

Confira um vídeo com uma explicação melhor sobre a empresa: [https://youtu.be/GusemhFLxMo](https://youtu.be/GusemhFLxMo)

---

## 🎯 Sobre Este Teste

### ⚠️ Formato: Bug Bounty ao Vivo

Este **NÃO é** um teste take-home tradicional. Este é um **teste ao vivo** no formato **Bug Bounty**, onde você atuará como um desenvolvedor de suporte técnico resolvendo problemas reais reportados por clientes.

### Como Funciona

1. **Você receberá acesso a um app React Native com bugs intencionais**
2. **Cada bug que você corrigir será validado pelo avaliador**
3. **Quanto mais bugs resolver corretamente, melhor sua pontuação**
4. **Você deve documentar cada solução explicando seu raciocínio**

### Por Que Este Formato?

- ✅ **Simula o dia a dia real** de um desenvolvedor
- ✅ **Avalia debugging skills**, não apenas coding
- ✅ **Identifica comunicação técnica** e raciocínio
- ✅ **Detecta capacidade de trabalhar sob pressão**
- ✅ **Permite uso de AI** (mas você precisa entender o código!)

---

## 🏗️ Cenário do Teste

### Sua Missão

Você foi contratado pela Contele como **Desenvolvedor Mobile**. Nosso time de QA e múltiplos clientes reportaram diversos problemas críticos em nossa aplicação de rastreamento de pontos.

Seu trabalho é:

1. **Investigar** cada ticket reportado
2. **Reproduzir** o problema
3. **Corrigir** o bug
4. **Documentar** a solução
5. **Validar** com o avaliador

### Sistema de Tickets

Temos **15 tickets abertos** com diferentes níveis de complexidade:

| Prioridade      | Tipo de Problemas                                             |
| --------------- | ------------------------------------------------------------- |
| 🔴 **Critical** | loops, memory leaks, UI freeze, race conditions, bugs nativos |
| 🟠 **High**     | Closures, state sync, null handling, timezone                 |
| 🟡 **Medium**   | Performance, key props, formatação                            |

**Veja todos os tickets detalhados em:** [`TICKETS.md`](./TICKETS.md)

---

## 🚀 Setup do Ambiente

### Pré-requisitos

- **Node.js** 16+ (preferencialmente com NVM)
- **Expo CLI** (`npm install -g expo-cli`)
- **Git**
- Editor de código (VS Code recomendado)

### Setup Super Simples

```bash
# Clone o repositório
git clone [URL]
cd react-native

# Instale dependências
npm install

# Inicie o app
expo start
```

**Pronto!** O app abrirá no Expo Go ou emulador.

**Atenção: O app TEM BUGS INTENCIONAIS!**

### Verificar Setup

- [ ] App Expo iniciado sem erros de build
- [ ] Console aberto para observar warnings
- [ ] Arquivo `SOLUTION_TEMPLATE.md` copiado para `SOLUTION.md`

**Nota:** Tudo funciona 100% local. Sem Docker, sem backend, sem complicação!

---

## 📋 Estrutura do Projeto

```
react-native/
├── README.md                    # Este arquivo
├── TICKETS.md                   # Lista de todos os 15 tickets
├── SOLUTION_TEMPLATE.md         # Template para documentar suas soluções
│
├── package.json
├── App.tsx                      # App principal
├── app.json                     # Configuração do Expo
│
├── src/                         # Código do app (COM BUGS!)
│   ├── screens/                 # Telas com bugs
│   ├── components/              # Componentes com bugs
│   ├── hooks/                   # Hooks com race conditions e leaks
│   ├── store/                   # Zustand store (com bugs)
│   └── utils/                   # Helpers com bugs
│
└── plugins/
    └── expo-native-location/    # Módulo nativo com bugs
        ├── ios/                 # Swift (com bugs)
        └── android/             # Kotlin (com bugs)
```

---

## 🎮 Como Funciona o Teste (Workflow)

### 1️⃣ Preparação (10min)

- Clone o repositório
- Configure o ambiente (`npm install && expo start`)
- Leia este README e o arquivo `TICKETS.md`
- Copie `SOLUTION_TEMPLATE.md` para `SOLUTION.md`

### 2️⃣ Briefing com Avaliador (5min)

- Avaliador explica as regras
- Tire suas dúvidas
- Inicie o cronômetro

### 3️⃣ Resolução de Bugs (3-4h)

Para cada ticket:

1. **Leia o ticket** em `TICKETS.md`
2. **Reproduza o problema** no app
3. **Investigue** usando console, debugger, profiler
4. **Implemente a correção**
5. **Teste extensivamente**
6. **Documente** no `SOLUTION.md`
7. **Chame o avaliador** para validar
8. **Receba confirmação** (se correto)
9. **Próximo ticket!**

### 4️⃣ Revisão Final (15min)

- Discussão sobre as soluções
- Perguntas técnicas
- Feedback

---

## 📝 Como Documentar Suas Soluções

Use o arquivo `SOLUTION.md` (cópia do template) para documentar cada correção:

```markdown
## TICKET-XXX: [Título]

### 🔍 Problema Identificado

[O que estava causando o bug]

### ✅ Solução Aplicada

[Como você corrigiu]

### 📁 Arquivos Alterados

- `path/file.ts`: [O que mudou]

### 🧪 Como Testei

[Seus passos de teste]
```

**Dica:** Documente enquanto resolve! Não deixe para o final.

---

## 🏆 Critérios de Avaliação

Você será avaliado em 4 dimensões principais:

### 1. Resolução Técnica (60%)

- Quantidade de bugs corrigidos corretamente
- Qualidade das soluções implementadas
- Ausência de efeitos colaterais
- Código limpo e funcional

### 2. Comunicação (20%)

- Clareza ao explicar raciocínio (5%)
- Processo de debug estruturado (5%)
- Perguntas inteligentes ao avaliador (5%)
- Documentação clara e completa (5%)

### 3. Metodologia de Debug (15%)

- Reproduz o problema primeiro (3%)
- Investigação sistemática (4%)
- Testes da solução (4%)
- Verifica side effects (4%)

### 4. Gestão do Tempo (5%)

- Priorização inteligente (2%)
- Mantém foco (2%)
- Ritmo consistente (1%)

### Expectativas por Nível

| Nível      | O Que Esperamos                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------- |
| **Júnior** | Resolver bugs básicos (useEffect, key props, null handling) e demonstrar comunicação clara      |
| **Pleno**  | Resolver bugs básicos + intermediários (race conditions, closures, performance)                 |
| **Sênior** | Resolver maioria dos bugs incluindo complexos (memory leaks complexos, UI freeze, bugs nativos) |

---

## 💡 Dicas e Recursos

### ✅ Você PODE:

- **Usar ChatGPT, GitHub Copilot, ou qualquer AI**
- Consultar documentação oficial
- Usar Google para pesquisar conceitos
- Perguntar ao avaliador (em momentos apropriados)
- Usar console.log, debugger, profiler
- Testar diferentes abordagens

### ⚠️ Você DEVE:

- **Explicar seu raciocínio** em voz alta enquanto trabalha
- **Entender o código** que usar (AI ou não)
- **Documentar cada solução** no SOLUTION.md
- **Testar suas correções** antes de chamar o avaliador
- **Ser honesto** se não souber algo

### ❌ Você NÃO PODE:

- Usar código que não entende
- Ignorar o avaliador durante o teste
- Deixar de documentar soluções
- Compartilhar soluções com outros candidatos

### 🛠️ Ferramentas Recomendadas

- **React DevTools:** Profiler, Component tree
- **Chrome/Safari DevTools:** Console, Network, Performance, Memory
- **Expo DevTools:** Console, Performance monitor
- **VS Code:** Debugger, Search, Terminal

---

## 🎓 O Que Buscamos

### Hard Skills

- Conhecimento sólido de React Hooks (useEffect, useState, useRef, etc.)
- Entendimento de ciclo de vida de componentes
- Debugging sistemático e eficiente
- Performance optimization (FlatList, memo, useMemo)
- Async/await e Promises
- Memory management (cleanup, garbage collection)
- Conhecimento básico de código nativo (iOS/Android) [diferencial]

### Soft Skills

- **Comunicação clara** do raciocínio técnico
- **Metodologia estruturada** de resolução de problemas
- **Gestão de tempo** sob pressão
- **Capacidade de aprender** com documentação/AI
- **Honestidade** sobre limitações

### Diferenciais

- Conhecimento de profilers e ferramentas de debug avançadas
- Experiência com race conditions e concurrency
- Entendimento profundo de memory management
- Familiaridade com módulos nativos React Native
- Capacidade de explicar trade-offs de diferentes soluções
- Experiência com Zustand ou outros state managers

---

## 📚 Recursos Úteis

### Documentação Oficial

- [React Hooks](https://react.dev/reference/react)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

### Debugging

- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Debugging React Native](https://reactnative.dev/docs/debugging)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Memory Profiling](https://developer.chrome.com/docs/devtools/memory-problems/)

### Tópicos Importantes

- [useEffect Dependencies](https://react.dev/reference/react/useEffect#specifying-reactive-dependencies)
- [Race Conditions](https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect)
- [Memory Leaks in React](https://www.debugbear.com/blog/react-memory-leaks)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Closures in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

## ❓ FAQ

### P: Quanto tempo eu tenho?

**R:** 3-4 horas é o tempo padrão. Você pode pedir uma pequena extensão se estiver próximo de terminar um ticket importante.

### P: Preciso resolver todos os 15 tickets?

**R:** Não! Ninguém espera que você resolva todos. Foque em resolver **bem** os que escolher, não em quantidade. Qualidade > Quantidade.

### P: Posso usar AI (ChatGPT, Copilot)?

**R:** **SIM!** Mas você **DEVE entender** o código que usar. Se não souber explicar, não vai contar pontos. AI é uma ferramenta, não uma muleta.

### P: E se eu travar em um ticket?

**R:** **Pule para o próximo!** Não perca 30min em um único ticket. Você pode voltar depois se sobrar tempo.

### P: Por onde devo começar?

**R:** Recomendamos começar pelos tickets de prioridade **Critical** mais simples (useEffect loops, key props). São mais rápidos e te dão confiança. Mas você pode escolher a ordem.

### P: O que acontece se minha solução estiver errada?

**R:** O avaliador **não validará** e você pode tentar novamente. Sem penalização por tentativas. Mas lembre-se: tempo é limitado!

### P: Posso perguntar ao avaliador durante o teste?

**R:** Sim, mas escolha os momentos certos. Perguntas **inteligentes e específicas** contam pontos! Perguntas tipo "como resolvo isso?" não serão respondidas.

### P: E se eu não terminar a documentação?

**R:** Documentação é parte importante da avaliação (5%). Documente **pelo menos** os tickets que resolver. Melhor ter 5 tickets bem documentados que 10 sem documentação.

### P: O app precisa de internet?

**R:** Não! Tudo funciona 100% offline. O estado é gerenciado localmente com Zustand e AsyncStorage.

---

## 🏢 Requisitos para a Vaga

### Hardware

- **Memória:** 8GB RAM (mínimo) | 16GB (recomendado)
- **Processador:** i5 ou AMD equivalente
- **Sistema:** macOS (ideal para React Native) ou Linux

### Software

- **Node.js** (versão 16+)
- **NVM** (gerenciador de versões do Node)
- **Git**
- **Editor:** VS Code (recomendado)
- **Expo CLI**

### Quem Buscamos

Queremos uma pessoa que:

- ❤️ **Gosta do que faz** e tem paixão por tecnologia
- 🤝 **Trabalha bem em equipe** e se comunica claramente
- 💡 **Tem vontade de inovar** e experimentar
- 📚 **Busca constante atualização** e aprendizado
- 🚀 **Resolve problemas de forma criativa** e estruturada

---

## 🎬 Pronto Para Começar?

### Setup Rápido

```bash
# 1. Clone o repositório
git clone [URL]
cd react-native

# 2. Instale dependências
npm install

# 3. Inicie o app
expo start

# 4. Copie o template de solução (em outro terminal)
cp SOLUTION_TEMPLATE.md SOLUTION.md

# 5. Leia os tickets
cat TICKETS.md

# 6. Comece a caçar bugs! 🐛🔫
```

### Checklist Antes de Começar

- [ ] App rodando sem erros de build
- [ ] Console do navegador aberto
- [ ] `SOLUTION.md` criado
- [ ] `TICKETS.md` lido
- [ ] Dúvidas sobre formato esclarecidas com avaliador

---

## 💪 Boa Sorte!

Lembre-se: Este teste simula o dia a dia real de um desenvolvedor. Estamos avaliando não apenas **se você sabe programar**, mas:

- **Como você programa**
- **Como você debugga**
- **Como você se comunica**
- **Como você pensa**
- **Como você trabalha sob pressão**

**Seja você mesmo, explique seu raciocínio, e divirta-se caçando bugs!** 🎯

> "O debugging é duas vezes mais difícil que escrever código. Portanto, se você escreve código da forma mais inteligente possível, por definição, não é inteligente o suficiente para debugá-lo." - Brian Kernighan

---

**Venha fazer parte do nosso time!** 🚀

---

## 📞 Suporte

Se tiver problemas técnicos para subir o ambiente (erros de instalação, build, etc.), contate o avaliador **antes** do início oficial do teste.

Durante o teste, perguntas técnicas sobre setup são bem-vindas. Perguntas sobre "como resolver o bug" não serão respondidas - isso faz parte do desafio! 😉

**Importante:** O teste só começa oficialmente após você confirmar que o ambiente está funcionando.

---

**Boa caçada! 🐛🔫**

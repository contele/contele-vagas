# 🎫 Sistema de Tickets - Bug Bounty Challenge

Bem-vindo ao sistema de tickets da Contele! Você foi contratado como desenvolvedor de suporte para resolver problemas críticos reportados por nossos clientes. Cada ticket resolvido e validado pelo avaliador contribui para sua pontuação final.

---

## 📊 Visão Geral dos Tickets

Temos **15 tickets abertos** com diferentes níveis de prioridade e complexidade.

| ID         | Título                                      | Prioridade  | Estimativa |
| ---------- | ------------------------------------------- | ----------- | ---------- |
| TICKET-001 | App congela ao abrir lista                  | 🔴 Critical | 10min      |
| TICKET-002 | Warning de key prop no console              | 🟡 Medium   | 5min       |
| TICKET-003 | Crash ao visualizar detalhes                | 🔴 Critical | 10min      |
| TICKET-004 | Memory leak na tela de configurações        | 🟠 High     | 15min      |
| TICKET-005 | App crasha ao iniciar                       | 🔴 Critical | 10min      |
| TICKET-006 | Dados duplicados ao atualizar lista         | 🔴 Critical | 20min      |
| TICKET-007 | Contador não incrementa corretamente        | 🟠 High     | 15min      |
| TICKET-008 | App trava com modo de teste ativado         | 🔴 Critical | 25min      |
| TICKET-009 | Horários incorretos nos pontos              | 🟠 High     | 20min      |
| TICKET-010 | Loading indicator não funciona corretamente | 🟡 Medium   | 15min      |
| TICKET-011 | Memory leak severo causa crash              | 🔴 Critical | 25min      |
| TICKET-012 | UI congela ao mostrar loading               | 🔴 Critical | 20min      |
| TICKET-013 | Auto-save causando memory leak              | 🟠 High     | 20min      |
| TICKET-014 | Bugs no módulo de localização iOS           | 🔴 Critical | 30min      |
| TICKET-015 | Coordenadas trocadas no Android             | 🔴 Critical | 20min      |

**Total:** 15 tickets | Tempo estimado: ~4h

---

## 📋 Detalhes dos Tickets

### TICKET-001 [🔴 CRITICAL] - App congela ao abrir lista de pontos

**Cliente:** Contele Logística
**Reportado em:** 2025-11-02 14:32
**Prioridade:** 🔴 Crítica
**Categoria:** Performance / React Hooks

#### Descrição

Cliente reporta que ao abrir a tela de lista de pontos, o aplicativo fica extremamente lento e eventualmente congela. O problema acontece sempre que a tela é carregada.

#### Steps to Reproduce

1. Abrir o aplicativo
2. Aguardar carregamento da lista de pontos
3. Observar que o app congela e fica inutilizável
4. Console mostra warnings sobre re-renders excessivos

#### Expected vs Actual

- **Expected:** Lista deve carregar normalmente e app deve ser responsivo
- **Actual:** App congela completamente com warnings de "Maximum update depth exceeded"

#### Arquivos Potencialmente Afetados

- `src/hooks/usePoints.ts`
- `src/screens/PointsListScreen.tsx`

---

### TICKET-002 [🟡 MEDIUM] - Warning de key prop no console

**Cliente:** QA Team
**Reportado em:** 2025-11-02 16:15
**Prioridade:** 🟡 Média
**Categoria:** React Best Practices

#### Descrição

Durante testes, o QA identificou warnings no console sobre elementos de lista sem a prop `key`. Isso pode causar problemas de performance e comportamento inesperado ao atualizar a lista.

#### Steps to Reproduce

1. Abrir o app
2. Navegar para lista de pontos
3. Abrir console do React Native
4. Observar warning: "Each child in a list should have a unique 'key' prop"

#### Expected vs Actual

- **Expected:** Nenhum warning no console, lista renderizada corretamente com keys únicas
- **Actual:** Warning aparece no console, potencial re-render desnecessário dos cards

#### Arquivos Potencialmente Afetados

- `src/screens/PointsListScreen.tsx`

---

### TICKET-003 [🔴 CRITICAL] - App crasha ao visualizar detalhes de um ponto

**Cliente:** Contele Rastreamento
**Reportado em:** 2025-11-02 18:45
**Prioridade:** 🔴 Crítica
**Categoria:** Error Handling

#### Descrição

Ao clicar em um ponto para ver os detalhes, o aplicativo crasha imediatamente com erro "Cannot read properties of null". Acontece de forma intermitente, especialmente para pontos sem todos os dados preenchidos.

#### Steps to Reproduce

1. Abrir lista de pontos
2. Clicar em qualquer ponto para ver detalhes
3. App crasha com erro no console

#### Expected vs Actual

- **Expected:** Detalhes do ponto exibidos corretamente, com fallback para dados ausentes
- **Actual:** App crasha completamente, usuário precisa reiniciar

#### Arquivos Potencialmente Afetados

- `src/screens/PointDetailsScreen.tsx`

---

### TICKET-004 [🟠 HIGH] - Memory leak na tela de configurações

**Cliente:** DevOps Team
**Reportado em:** 2025-11-03 09:20
**Prioridade:** 🟠 Alta
**Categoria:** Memory Management

#### Descrição

Após testes prolongados, identificamos que a tela de configurações está causando memory leak. Ao ativar o rastreamento GPS e navegar para outra tela, os intervals continuam rodando em background.

#### Steps to Reproduce

1. Navegar para Settings
2. Ativar "Rastreamento GPS"
3. Voltar para tela anterior
4. Observar console - logs continuam aparecendo
5. Usar profiler de memória - memory leak detectado

#### Expected vs Actual

- **Expected:** Ao sair da tela, todos os listeners devem ser removidos e nenhum interval deve continuar rodando
- **Actual:** Intervals continuam rodando após desmontar componente, memória aumenta gradualmente

#### Arquivos Potencialmente Afetados

- `src/hooks/useLocation.ts`

---

### TICKET-005 [🔴 CRITICAL] - App crasha ao iniciar

**Cliente:** Múltiplos clientes
**Reportado em:** 2025-11-03 11:00
**Prioridade:** 🔴 Crítica
**Categoria:** Initialization

#### Descrição

Alguns usuários reportam que o app crasha logo ao iniciar, antes mesmo de carregar qualquer tela. O erro aponta para o ErrorBoundary Component.

#### Steps to Reproduce

1. Abrir o aplicativo
2. App crasha imediatamente
3. Erro: "Cannot read properties of undefined (reading 'hasError')"

#### Expected vs Actual

- **Expected:** App deve iniciar normalmente, ErrorBoundary deve funcionar para capturar erros
- **Actual:** App crasha antes de renderizar qualquer coisa, ErrorBoundary em si está causando o crash

#### Arquivos Potencialmente Afetados

- `src/components/ErrorBoundary.tsx`

---

### TICKET-006 [🔴 CRITICAL] - Dados duplicados ao atualizar lista rapidamente

**Cliente:** Contele Logística
**Reportado em:** 2025-11-02 13:10
**Prioridade:** 🔴 Crítica
**Categoria:** Race Condition

#### Descrição

Quando o usuário faz refresh múltiplas vezes rapidamente na lista de pontos, os dados aparecem duplicados ou inconsistentes. Às vezes mostra pontos antigos misturados com novos.

#### Steps to Reproduce

1. Abrir lista de pontos
2. Fazer pull-to-refresh várias vezes rapidamente
3. Observar que dados ficam inconsistentes
4. Alguns pontos aparecem duplicados

#### Expected vs Actual

- **Expected:** Múltiplas requisições devem ser tratadas corretamente, dados sempre consistentes
- **Actual:** Race condition causando dados inconsistentes, lista fica com dados "embaralhados"

#### Arquivos Potencialmente Afetados

- `src/hooks/usePoints.ts`

---

### TICKET-007 [🟠 HIGH] - Contador de updates sempre mostra 1

**Cliente:** QA Team
**Reportado em:** 2025-11-02 15:30
**Prioridade:** 🟠 Alta
**Categoria:** State Management

#### Descrição

Na tela de Settings, o "Contador de updates" sempre mostra 1, mesmo após vários segundos de rastreamento ativo. Deveria incrementar a cada update, mas fica travado em 1.

#### Steps to Reproduce

1. Ir para Settings
2. Ativar rastreamento
3. Observar "Contador de updates" na seção Debug Info
4. Aguardar 30 segundos
5. Contador continua mostrando 1

#### Expected vs Actual

- **Expected:** Contador deve incrementar a cada update (baseado no intervalo configurado)
- **Actual:** Contador sempre mostra 1, console.log mostra "Update count: 0" repetidamente

#### Arquivos Potencialmente Afetados

- `src/hooks/useLocation.ts`

---

### TICKET-008 [🔴 CRITICAL] - App trava completamente com modo de teste ativado

**Cliente:** Contele Rastreamento
**Reportado em:** 2025-11-02 17:20
**Prioridade:** 🔴 Crítica
**Categoria:** Performance

#### Descrição

Ao ativar o "Modo de teste (5000 pontos)" na lista de pontos, o app trava completamente por 10-15 segundos. A UI fica completamente congelada e não responde a nenhuma interação.

#### Steps to Reproduce

1. Abrir lista de pontos
2. Ativar o switch "Modo de teste (5000 pontos)"
3. App congela completamente
4. Aguardar 10-15 segundos
5. Lista finalmente aparece, mas scroll está travado

#### Expected vs Actual

- **Expected:** Lista grande deve ser renderizada de forma performática, UI deve permanecer responsiva
- **Actual:** UI completamente congelada, scroll extremamente lento, alto consumo de memória

#### Arquivos Potencialmente Afetados

- `src/screens/PointsListScreen.tsx`

---

### TICKET-009 [🟠 HIGH] - Horários dos pontos aparecem incorretos

**Cliente:** Contele Logística
**Reportado em:** 2025-11-03 08:15
**Prioridade:** 🟠 Alta
**Categoria:** Date/Time Handling

#### Descrição

Os horários exibidos nos cards de pontos estão aparecendo com 3 horas a mais do que deveriam. Por exemplo, um ponto registrado às 10:15 aparece como 13:15. O problema afeta tanto a data/hora completa quanto o texto "X horas atrás".

#### Steps to Reproduce

1. Abrir lista de pontos
2. Observar data/hora em qualquer card
3. Comparar com hora real do sistema
4. Horário está 3 horas adiantado

#### Expected vs Actual

- **Expected:** Horários devem ser exibidos no timezone correto (UTC-3 para São Paulo)
- **Actual:** Horários com 3 horas a mais, confusão para os clientes sobre quando os pontos foram registrados

#### Arquivos Potencialmente Afetados

- `src/utils/dateHelper.ts`
- `src/components/PointCard.tsx`

---

### TICKET-010 [🟡 MEDIUM] - Loading indicator não funciona corretamente ao atualizar

**Cliente:** QA Team
**Reportado em:** 2025-11-03 10:45
**Prioridade:** 🟡 Média
**Categoria:** State Management

#### Descrição

Ao fazer pull-to-refresh na lista de pontos, o loading indicator às vezes não aparece, às vezes fica travado, e se der erro, o loading continua ativo indefinidamente.

#### Steps to Reproduce

1. Abrir lista de pontos
2. Fazer pull-to-refresh
3. Observar comportamento do loading
4. Forçar um erro (desligar conexão)
5. Loading não desaparece nunca

#### Expected vs Actual

- **Expected:** Loading deve aparecer ao iniciar refresh e desaparecer quando terminar (sucesso ou erro)
- **Actual:** Loading às vezes não aparece, se der erro continua ativo para sempre

#### Arquivos Potencialmente Afetados

- `src/hooks/usePoints.ts`

---

### TICKET-011 [🔴 CRITICAL] - Memory leak severo causa crash após uso prolongado

**Cliente:** DevOps + Cliente Enterprise
**Reportado em:** 2025-11-03 12:00
**Prioridade:** 🔴 Crítica
**Categoria:** Memory Management

#### Descrição

Em testes de stress e uso prolongado, identificamos memory leak severo que causa crash do aplicativo após 30-60 minutos de uso. Memória cresce continuamente até o sistema encerrar o app.

#### Steps to Reproduce

1. Abrir Settings
2. Ativar rastreamento GPS
3. Deixar app rodando por 30-60 minutos
4. Observar uso de memória no profiler
5. Memória cresce continuamente
6. App eventualmente crasha com erro "Out of Memory"

#### Expected vs Actual

- **Expected:** Memória deve permanecer estável, listeners devem ser limpos adequadamente
- **Actual:** Múltiplas subscriptions/intervals não são limpas, memória cresce ~10MB a cada minuto

#### Arquivos Potencialmente Afetados

- `src/hooks/useLocation.ts`

---

### TICKET-012 [🔴 CRITICAL] - UI congela completamente ao mostrar loading

**Cliente:** Múltiplos clientes
**Reportado em:** 2025-11-03 07:00
**Prioridade:** 🔴 Crítica
**Categoria:** Performance / UI Thread

#### Descrição

Quando a tela de loading é exibida (LoadingSpinner component), a UI congela completamente. A animação de loading fica travada, botões não respondem, app parece ter crashado.

#### Steps to Reproduce

1. Abrir app
2. Aguardar tela de loading aparecer
3. Observar que animação do spinner congela
4. UI completamente travada
5. Após 5-10 segundos, loading desaparece e app volta ao normal

#### Expected vs Actual

- **Expected:** Loading deve mostrar animação suave, UI deve permanecer responsiva
- **Actual:** UI congela completamente, animação travada, usuário pensa em force-quit

#### Arquivos Potencialmente Afetados

- `src/components/LoadingSpinner.tsx`

---

### TICKET-013 [🟠 HIGH] - Sistema de auto-save causando memory leak

**Cliente:** DevOps Team
**Reportado em:** 2025-11-03 14:30
**Prioridade:** 🟠 Alta
**Categoria:** Memory Management

#### Descrição

O sistema de auto-save que salva pontos a cada 15 segundos está causando memory leak. Após navegar entre telas, o intervalo continua rodando em background mesmo quando não deveria.

#### Steps to Reproduce

1. Abrir app e navegar pelas telas
2. Sistema de auto-save inicia automaticamente
3. Navegar para outras telas
4. Observar console - logs de "[AutoSave] Saving points..." continuam aparecendo
5. Memory leak detectado no profiler

#### Expected vs Actual

- **Expected:** Interval de auto-save deve ser limpo quando componente desmonta
- **Actual:** Interval continua rodando indefinidamente, causando memory leak

#### Arquivos Potencialmente Afetados

- `src/hooks/useAutoSave.ts`

---

### TICKET-014 [🔴 CRITICAL] - Módulo de localização não solicita permissão no iOS

**Cliente:** Contele Rastreamento
**Reportado em:** 2025-11-03 13:30
**Prioridade:** 🔴 Crítica
**Categoria:** Native Module / iOS

#### Descrição

No iOS, o módulo nativo de localização nunca solicita permissão ao usuário. O app verifica o status de permissão mas não exibe o dialog nativo do sistema para o usuário autorizar.

#### Steps to Reproduce

1. Instalar app no iOS (ou simulador)
2. Tentar usar funcionalidade de localização
3. App verifica permissão mas dialog nunca aparece
4. Localização não funciona

#### Expected vs Actual

- **Expected:** Dialog nativo do iOS deve aparecer solicitando permissão de localização
- **Actual:** Permissão nunca é solicitada, localização não funciona

#### Arquivos Potencialmente Afetados

- `plugins/expo-native-location/ios/ExpoNativeLocationModule.swift`

---

### TICKET-015 [🔴 CRITICAL] - Coordenadas latitude/longitude trocadas no Android

**Cliente:** Contele Rastreamento
**Reportado em:** 2025-11-03 15:00
**Prioridade:** 🔴 Crítica
**Categoria:** Native Module / Android

#### Descrição

No módulo nativo Android, as coordenadas de latitude e longitude estão sendo retornadas trocadas. Isso causa pontos de rastreamento em localizações completamente erradas no mapa.

#### Steps to Reproduce

1. Usar app no Android
2. Obter localização atual via módulo nativo
3. Observar coordenadas retornadas
4. Latitude e longitude estão invertidas

#### Expected vs Actual

- **Expected:** Latitude deve conter valor de latitude, longitude deve conter valor de longitude
- **Actual:** Valores estão trocados, causando pontos em localizações incorretas

#### Arquivos Potencialmente Afetados

- `plugins/expo-native-location/android/src/main/java/expo/modules/nativelocation/ExpoNativeLocationModule.kt`
- `plugins/expo-native-location/ios/ExpoNativeLocationModule.swift` (pode ter o mesmo problema)

---

## 🎯 Dicas Gerais

### Para Todos os Tickets

- Leia o ticket com atenção e reproduza o problema antes de corrigir
- Teste extensivamente após a correção
- Documente o raciocínio no arquivo SOLUTION.md
- Chame o avaliador quando tiver uma solução completa

### Ferramentas Úteis

- **React DevTools:** Profiler, Component tree
- **Console do navegador:** Observe warnings e errors
- **Expo DevTools:** Performance monitor
- **Debugger:** Use breakpoints para entender o fluxo

### Estratégia Recomendada

1. Comece pelos tickets que você se sente mais confortável
2. Não perca muito tempo travado em um ticket - pule e volte depois
3. Tickets de prioridade 🔴 Critical valem mais pontos
4. Documente enquanto resolve, não deixe para o final

---

**Boa sorte! 🚀**

Lembre-se: Este teste avalia não apenas sua capacidade de resolver bugs, mas também sua metodologia de debug, comunicação técnica e capacidade de trabalhar sob pressão.

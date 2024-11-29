## 🖌️ Como Usar CSS Modular em React

### O que são CSS Modules?

CSS Modules permitem o uso de arquivos CSS que são escopados localmente por padrão, garantindo que os estilos não vazem para outros componentes. Isso é <strong>especialmente útil em projetos React para evitar conflitos de estilos</strong>.

### Configuração

Estrutura de Arquivos: Certifique-se de que os arquivos CSS sigam a convenção de nomenclatura ComponentName.module.css.

Exemplo:

```bash
src/
├── components/
│   ├── Header/
│   │   └── Header.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   └── ...
├── styles/
│   ├── Header.module.css
│   ├── Footer.module.css
│   └── ...
```

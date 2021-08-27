module.exports = function (plop) {
  plop.setGenerator(
    'component', {
      description: 'application component',

      // inquirer prompts
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'component name?',
        },
      ],

      // actions to perform
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/component/index.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/component/styles.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/component/test.tsx.hbs',
        },
      ],
    },
  ),
  plop.setGenerator(
    'screen', {
      description: 'application screen',

    // inquirer prompts
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'screen name?',
        },
      ],

      // actions to perform
      actions: [
        {
          type: 'add',
          path: '../src/screens/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/screen/index.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/screens/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/screen/styles.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/screens/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/screen/test.tsx.hbs',
        },
      ],
    }
  )
};

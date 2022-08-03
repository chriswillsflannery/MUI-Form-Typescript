# ConnectsYa Form Builder

Note - I have named this ConnectsYa in effort to keep it public but not easily searchable by future candidates.

## Getting Started

```bash
git clone https://github.com/chriswillsflannery/MUI-Form-Typescript.git
cd MUI-Form-Typescript
npm i
npm start
```

## Running Test Suite

```bash
npm run test
```

## Libraries

Note - included libraries have intentionally been kept light. You will notice there is no form validation library or typescript schema validation library. This is by design.

-  Components/Styling: [Material UI](https://mui.com/)
-  Unit Testing: [Jest](https://jestjs.io/)
-  Unit Testing: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Timezone API Source

Note - I have included a developer's comment in the TimeZone component.

-  [World Time API](http://worldtimeapi.org/api/timezone)

## Additions/Improvements I would make in an enterprise app

1. Generate Form schema JSON blob to dictate form fields, permissions and restrictions, such as you might find on [react-jsonschema-form](https://react-jsonschema-form.readthedocs.io/en/latest/). What if you need multiple applications to dynamically generate the same form? What if you want a marketing or non-technical team member to update some form fields? Use a JSON blob as a single source of truth.
2. Use a form validation library like [react-hook-form](https://react-hook-form.com/) or [formik](https://formik.org/) for out-of-the-box state management and error handling. This application intentionally omitted these to demonstrate understanding of what these libraries do under-the-hood.
3. Use a Typescript schema generator/type builder like [typebox](https://github.com/sinclairzx81/typebox) or schema validator like zod. [zod](https://github.com/colinhacks/zod). I view these as nice-to-haves and will certainly improve workflow.
4. This is my first time working with Material UI components so I would like to have a much deeper dive into best practices.

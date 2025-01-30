# Next.js & HeroUI Template

This is a template for creating applications using Next.js 14 (app directory) and HeroUI (v2).

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Create a new project with this template

To create a new project based on this template, replacing `my-new-project` with your desired project name, run the following command:

```bash
npx create-next-app my-new-project -e https://github.com/heroui-inc/next-app-template
```

Alternatively, you can clone the repository manually and set it up:

```bash
git clone https://github.com/heroui-inc/next-app-template.git my-new-project
cd my-new-project
rm -rf .git
git init
```

### Rename the template project

If you want to set a custom project name in the package configuration, update the `package.json` file:

```bash
"name": "my-custom-project"
```

You can also update other relevant metadata in `package.json` such as version, author, and description.

### Install dependencies

You can use one of the following package managers: `npm`, `yarn`, `pnpm`, or `bun`. Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, run `pnpm install` again to ensure that dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).


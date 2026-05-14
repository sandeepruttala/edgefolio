# Data Management Guide

## 📁 Data Structure

All portfolio data is centralized in `/public/data.json`

### How it works:
- Components fetch data from `data.json` on component mount
- Changes to `data.json` are automatically detected every 5 seconds during development
- The site automatically re-renders when data changes
- No need to restart the dev server or rebuild the project

## 🔄 Making Changes

Simply edit `/public/data.json` and save. Your changes will appear on the site within 5 seconds!

## 📝 Example: Adding a Project

Edit `/public/data.json` and add to the `projects` array:

```json
{
  "title": "My Awesome Project",
  "description": "A description of what the project does",
  "technologies": ["React", "Node.js", "MongoDB"],
  "link": "https://github.com/yourname/project"
}
```

Save the file, wait 5 seconds, and see your project appear on the site!

## 🚀 For Production

Build your project with `npm run build` and deploy the `dist/` folder. The `data.json` file will be included in the public assets.

## 💡 Tips

- Keep your data structure consistent with the schema in `data.json`
- Use proper JSON formatting (the site will show errors in console if JSON is invalid)
- Add multiple entries by adding more objects to the arrays
- All text fields support markdown links and basic HTML won't work (keep it plain text)

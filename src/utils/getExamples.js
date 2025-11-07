// 使用 Vite 的 glob 功能自动导入所有示例
const exampleModules = import.meta.glob('../examples/*.jsx', { eager: true });

// 提取示例信息
export function getExamples() {
  const examples = [];
  
  Object.keys(exampleModules).forEach((path) => {
    // 从路径中提取文件名（例如：../examples/Example1.jsx -> Example1）
    const fileName = path.split('/').pop().replace('.jsx', '');
    // 生成路由路径（例如：Example1 -> /example1）
    const routePath = `/${fileName.charAt(0).toLowerCase() + fileName.slice(1)}`;
    
    // 获取组件的默认导出
    const module = exampleModules[path];
    const component = module.default;
    
    // 尝试从组件获取标题（如果有的话）
    const title = component.displayName || fileName;
    
    examples.push({
      path: routePath,
      component: component,
      fileName: fileName,
      title: title,
    });
  });
  
  // 按文件名排序
  examples.sort((a, b) => a.fileName.localeCompare(b.fileName));
  
  return examples;
}

export const RenderTemplate = function (superClass) {
  return class extends superClass {
    constructor() {
      super();
      this._template = Array;
    }
    render(props) {
      const name = this.constructor.name;
      if (!this._template[name]) {
        import(
          /* webpackChunkName: "view" */
          /* webpackMode: "lazy" */
          `../../src/components/${name}/View/${name}.js`).then((module) => {
            this._template[name] = module.default.bind(this);
            this.requestRender();
        });
      }
      else {
        return this._template[name](props);
      }
    }
  }
}

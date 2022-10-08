const particlesFrag = `
    uniform float uOpacity;

    void main() {
      // gl_FragColor = vec4(vec3(1.0), 0.25);
      gl_FragColor = vec4(vec3(1.0), uOpacity);
    }
  `
export default particlesFrag

#ifdef GL_ES
#extension GL_OES_standard_derivatives : enable
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
precision highp int;
#else
precision mediump float;
precision mediump int;
#endif
#else
#define highp
#define mediump
#define lowp
#endif
varying vec2 texCoord0;
uniform sampler2D img;
uniform int count;
uniform vec4 offset;
uniform vec4 weights[1];
void main() {
int i;
vec4 tmp = vec4(0.0, 0.0, 0.0, 0.0);
vec2 loc = texCoord0 + offset.zw;
{
tmp += weights[0].x * texture2D(img, loc);
loc += offset.xy;
tmp += weights[0].y * texture2D(img, loc);
loc += offset.xy;
tmp += weights[0].z * texture2D(img, loc);
loc += offset.xy;
tmp += weights[0].w * texture2D(img, loc);
loc += offset.xy;
}
gl_FragColor = tmp;
}

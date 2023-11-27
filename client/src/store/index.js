import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#97CF8A',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
})

export default state;
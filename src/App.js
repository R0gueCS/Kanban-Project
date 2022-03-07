import './App.css';
import {LoginPanel, Sessions, Navibar, Sidebar, Settings, Notification} from './Components';
import Appearance from "./Components/Settings/Appearance";
import {useState} from "react";

function App() {
    const [bgcolor, setBgcolor] = useState();

    const Lightdark = (color) => {

        // Variables for red, green, blue values
        let r, g, b, hsp;

        // Check the format of the color, HEX or RGB?
        if (color.match(/^rgb/)) {

            // If RGB --> store the red, green, blue values in separate variables
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

            r = color[1];
            g = color[2];
            b = color[3];
        }
        else {

            // If hex --> Convert it to RGB: http://gist.github.com/983661
            color = +("0x" + color.slice(1).replace(
                color.length < 5 && /./g, '$&$&'));

            r = color >> 16;
            g = color >> 8 & 255;
            b = color & 255;
        }

        // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
        hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        );

        // Using the HSP value, determine whether the color is light or dark
        if (hsp>127.5) {
            return 'light';
        }
        else {

            return 'dark';
        }
    }
    return (
        <div className="App" style={{
            backgroundColor: bgcolor,
            opacity: "100%"
        }}>
            <Navibar />
            <Sidebar />
            <div className="content"><Appearance bg={e => setBgcolor(e)}/></div>
        </div>
    );
}

export default App;
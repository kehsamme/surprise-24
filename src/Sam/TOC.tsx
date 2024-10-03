import { Link } from "react-router-dom";
import Food from "./food";
import Sam from ".";
export default function TOC() {
    return (
      <ul>
        <li><Link to="/Sam">Home</Link></li>
        <li><Link to="/Sam/Emma">Click Me!</Link></li>
        <li><Link to="/Sam/Intro">Click Me!</Link></li>
        <li><Link to="/Sam/Food">Click Me!</Link></li>
      </ul>
    );
  }
  
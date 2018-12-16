import React, {Component} from 'react';

import './App.css';


class ColorChanger extends React.Component {
    render() {
        return (
            <div>
                <table id={'table2'}>
                    <thead>
                    <tr>
                        <th>序号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>兰亚戈</td>
                        <td>18</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>戴梦晓</td>
                        <td>18</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>胡旭东</td>
                        <td>18</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>杨梅</td>
                        <td>18</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>孙颖</td>
                        <td>18</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>方乐</td>
                        <td>18</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>方乐</td>
                        <td>18</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>方乐</td>
                        <td>18</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>方乐</td>
                        <td>18</td>
                        <td>1</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}

class App extends Component {
    render() {
        return (
            <ColorChanger/>
        );
    }
}

export default App;

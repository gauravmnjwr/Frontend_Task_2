import React from 'react';
import video1 from '../video1.gif'

function Share1() {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const handleClick = (e) => {
        copyToClipboard(video1);
    }

    function writeToCanvas(src) {
        return new Promise((res, rej) => {
            img.src = src;
            img.onload = function () {
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                ctx.drawImage(img, 0, 0)
                canvas.toBlob((blob) => {
                    res(blob);
                }, 'gif');
            }
        });
    }
    async function copyToClipboard(src) {
        const image = await writeToCanvas(src);
        try {
            await navigator.clipboard.write([
                new ClipboardItem({
                    [image.type]: image,
                })

            ]);
            window.alert('GIF Copied Successfully')
            console.log("Success");

        } catch (e) {
            console.log("Copy failed: " + e);
        }

    }

    return (
        <div id='main-wrapper'>
            <img src={video1} alt="" id='gif1' />
            <br />
            <hr />
            <button id='copy-button' onClick={handleClick}><img id='icon' src="https://cdn-icons-png.flaticon.com/512/739/739249.png" alt="" /> <span>Copy Linked GIF</span></button>
        </div>
    )
}

export default Share1



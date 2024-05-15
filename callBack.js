function multiply(num1, num2, कॉलबैक) {
    let परिणाम = num1 * num2;
    // परिणाम के साथ कॉलबैक फ़ंक्शन को कॉल करें
    कॉलबैक(परिणाम);
}

// एक कॉलबैक फ़ंक्शन को परिभाषित करें
function displayResult(परिणाम) {
    console.log("परिणाम है: " + परिणाम);
}

// हम multiply फ़ंक्शन को दो नंबर्स के साथ और कॉलबैक फ़ंक्शन के रूप में displayResult के साथ कॉल करते हैं
multiply(5, 3, displayResult);

//multiply एक फ़ंक्शन है जो दो नंबर्स (num1 और num2) और एक कॉलबैक फ़ंक्शन (कॉलबैक) लेता है। यह num1 और num2 का गुणा करता है, फिर उसे परिणाम के साथ एक कॉलबैक फ़ंक्शन को बुलाता है।

//displayResult एक कॉलबैक फ़ंक्शन है जो सिर्फ परिणाम को कॉन्सोल पर लॉग करता है।

//हम multiply को 5 और 3 के रूप में नंबर्स के साथ और कॉलबैक फ़ंक्शन के रूप में displayResult के साथ कॉल करते हैं। इसका मतलब है कि जब multiply परिणाम की गणना करता है, तो वह परिणाम (15 इस मामले में) के साथ displayResult को बुलाएगा।


//इस परिणामस्वरूप, आपको कॉन्सोल पर "परिणाम है: 15" का संदेश लॉग होगा।

































const display = function (result) {
    console.log(result);
}

const add = function (num1, num2, mycallback) {
    let sum = num1 + num2;
    mycallback(sum);
}

add(3, 1, display);

// //add(3, 1, display) is called.
// Inside add, num1 is 3, num2 is 1, and mycallback is display.
// sum is calculated as 3 + 1 = 4.
// mycallback(sum) is called, which executes display(4).
// Inside display, result is 4, so it logs 4 to the console.
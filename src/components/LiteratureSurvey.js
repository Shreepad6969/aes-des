import React from 'react';

const LiteratureSurvey = () => (
  <div>
    <h1>Literature Review on AES, DES, Hybrid AES-DES, and Logistic Map</h1>

    <h2>Advanced Encryption Standard (AES)</h2>
    <p>
      AES, established by the National Institute of Standards and Technology (NIST) in 2001, is a symmetric encryption algorithm designed for high security and performance. 
      It uses fixed block sizes of 128 bits and supports key sizes of 128, 192, or 256 bits. AES operates in rounds, employing transformations such as SubBytes, ShiftRows, 
      MixColumns, and AddRoundKey. Its security stems from its resistance to linear and differential cryptanalysis, making it a standard for secure data transmission.
    </p>
    <p><b>Source:</b> NIST AES Specification</p>
    {/* Add image1 here */}
    <img src="/images/AES.jpg" alt="AES Illustration" style={{ maxWidth: '100%', margin: '20px 0' }} />

    <h2>Data Encryption Standard (DES)</h2>
    <p>
      DES, developed in the 1970s, encrypts 64-bit blocks of data using a 56-bit key. It processes data through 16 rounds of substitution and permutation operations. 
      While revolutionary at its inception, DES is now considered insecure due to its susceptibility to brute-force attacks. Its successor, Triple DES (3DES), improved 
      security by applying DES three times with different keys, but at the cost of efficiency.
    </p>
    {/* Add image2 here */}
    <img src="/images/DES.jpg" alt="DES Illustration" style={{ maxWidth: '100%', margin: '20px 0' }} />

    <h2>Hybrid AES-DES Approach</h2>
    <p>
      The hybrid AES-DES approach combines the strengths of AES and DES to create a layered encryption system. AES provides strong data protection with its large key sizes 
      and complex transformations, while DES adds an additional encryption layer for diversity and complexity. This hybrid methodology is particularly effective in scenarios 
      requiring a balance of performance and security, especially in legacy systems that still rely on DES.
    </p>
    {/* Add image3 here */}
    {/* <img src="image3" alt="Hybrid AES-DES Illustration" style={{ maxWidth: '100%', margin: '20px 0' }} /> */}

    <h2>Logistic Map for Chaotic Sequences</h2>
    <p>
      The logistic map, represented by the equation <i>xn+1 = r ⋅ xn ⋅ (1 − xn)</i>, exhibits chaotic behavior when the parameter <i>r</i> is in the range 3.57–4. 
      This chaotic nature is leveraged in cryptography to introduce unpredictability and pseudo-randomness. The sensitivity of the logistic map to initial conditions makes it 
      particularly useful in generating unique sequences for encryption, enhancing resistance to cryptanalytic attacks.
    </p>
    {/* Add image4 here */}
    <img src="/images/logmap.jpg" alt="Logistic Map Illustration" style={{ maxWidth: '100%', margin: '20px 0' }} />
  </div>
);

export default LiteratureSurvey;

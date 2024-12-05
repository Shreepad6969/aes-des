import React from 'react';

const Home = () => (
  <div style={{ marginTop: '60px' }}> 
    <h1>Abstract</h1>
    <p>
      Data security is a critical concern in the modern digital landscape, requiring innovative encryption techniques to safeguard sensitive information. 
      This report introduces a Hybrid AES-DES Encryption Algorithm augmented with a chaotic sequence generated using the logistic map. 
      The hybrid approach combines the cryptographic strengths of Advanced Encryption Standard (AES) and Data Encryption Standard (DES), 
      leveraging AES for strong encryption and DES for added diversity and efficiency.
    </p>
    <p>
      The chaotic sequence, derived from the logistic map, enhances the algorithm’s unpredictability by modifying the plaintext before encryption, 
      adding an additional layer of security. The logistic map’s inherent sensitivity to initial conditions ensures high randomness, making the encrypted data highly resistant to cryptanalytic attacks.
    </p>
    <p>
      This hybrid methodology achieves a balance between security and computational efficiency, providing a robust framework for encrypting data while mitigating vulnerabilities inherent in standalone AES or DES implementations.
    </p>

    <h1>Introduction</h1>
    <p>
      In the current era of digitalization, safeguarding sensitive data from unauthorized access is of paramount importance. Cryptographic techniques play a crucial role 
      in securing information by converting it into an unreadable format for unauthorized users. Among these techniques, the Advanced Encryption Standard (AES) and the Data 
      Encryption Standard (DES) have been widely utilized for their effectiveness in ensuring data confidentiality.
    </p>
    <p>
      AES, adopted as a standard in 2001, is a symmetric block cipher that supports key lengths of 128, 192, or 256 bits. It is known for its robustness against cryptanalytic attacks 
      and is extensively used in applications requiring high security, such as banking, cloud computing, and telecommunications. However, the complexity of AES may result in increased 
      computational overhead in certain scenarios.
    </p>
    <p>
      DES, introduced in 1977, is another symmetric block cipher that operates with a 56-bit key and processes data in 64-bit blocks. While DES is less secure due to its shorter key length, 
      it remains relevant in legacy systems and applications requiring faster encryption with moderate security.
    </p>
    <p>
      In this report, we propose a hybrid approach combining AES and DES, aiming to leverage their respective strengths while mitigating their weaknesses. To further enhance security, a chaotic 
      sequence generated using the logistic map is incorporated. The logistic map is a simple yet powerful mathematical function characterized by its chaotic behavior and sensitivity to initial conditions. 
      These properties make it ideal for generating pseudo-random sequences that can obfuscate data effectively.
    </p>

    <h1>Objectives</h1>
    <ul>
      <li>
        <b>Develop a Hybrid Encryption Algorithm:</b>
        Combine AES and DES to achieve a balance between security and computational efficiency.
      </li>
      <li>
        <b>Incorporate Chaotic Sequences:</b>
        Use the logistic map to introduce additional randomness and enhance data obfuscation, improving resistance to cryptanalytic attacks.
      </li>
      <li>
        <b>Improve Security:</b>
        Strengthen data protection by adding multiple layers of encryption and randomness.
      </li>
      <li>
        <b>Analyze Performance:</b>
        Quantify the algorithm's encryption and decryption speeds, entropy levels, and resistance to common attacks.
      </li>
    </ul>
  </div>
);

export default Home;

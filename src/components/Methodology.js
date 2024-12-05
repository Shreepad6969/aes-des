import React from 'react';
import './Methodology.css';  // Import the CSS file for Methodology component


const Methodology = () => (
  <div>
    <h1>Methodology</h1>
    <p>
      The proposed encryption system utilizes a hybrid approach combining AES (Advanced Encryption Standard) and DES (Data Encryption Standard), 
      alongside the incorporation of a Logistic Map to generate chaotic sequences for enhanced security. The methodology can be broken down into several key steps:
    </p>

    <h2>1. Key and IV Generation</h2>
    <ul>
      <li>
        <b>AES and DES Key Generation:</b> The system generates cryptographic keys for both AES (256-bit) and DES (56-bit). These keys are randomly generated using 
        the <code>RAND_bytes</code> function provided by the OpenSSL library, ensuring unpredictability and strength in the encryption process.
      </li>
      <li>
        <b>Initialization Vector (IV):</b> An IV of 128 bits is generated for AES encryption to ensure that identical plaintexts yield different ciphertexts on subsequent encryptions.
      </li>
    </ul>

    <h2>2. Chaotic Sequence Generation</h2>
    <ul>
      <li>
        <b>Logistic Map for Sequence Generation:</b> To introduce an additional layer of security, a chaotic sequence is generated using the logistic map equation: 
        <i>xn+1 = r ⋅ xn ⋅ (1 − xn)</i> where <i>r</i> is a constant in the range 3.57 to 4, which produces chaotic, unpredictable sequences. 
        This sequence is used to modify the plaintext data before encryption by XORing the sequence values with the data. The sensitivity of the logistic map to initial 
        conditions enhances the unpredictability of the ciphertext.
      </li>
    </ul>

    <h2>3. Data Encryption</h2>
    <ul>
      <li>
        <b>AES Encryption:</b> The system encrypts the modified plaintext data using AES-256-CBC (Cipher Block Chaining mode), where the input data is processed in 128-bit blocks. 
        AES provides strong security due to its 256-bit key size and multiple rounds of transformations (SubBytes, ShiftRows, MixColumns, AddRoundKey).
      </li>
      <li>
        <b>DES Encryption:</b> After AES encryption, DES is applied as a secondary layer of encryption. This two-step encryption approach mitigates the risks associated with 
        each individual algorithm, leveraging AES’s strength and DES’s additional complexity.
      </li>
    </ul>

    <h2>4. Data Decryption</h2>
    <ul>
      <li>
        <b>DES Decryption:</b> The decryption process starts with DES, where the encrypted data is decrypted using the corresponding 56-bit DES key. Since DES works in a symmetric 
        manner, the decryption is straightforward, though it is now more secure as part of the hybrid approach.
      </li>
      <li>
        <b>AES Decryption:</b> After DES decryption, AES decryption is applied to retrieve the original data. AES decryption follows the inverse operations of its encryption process, 
        ensuring that the data is correctly recovered.
      </li>
      <li>
        <b>Reversing Chaotic Modification:</b> During decryption, the chaotic sequence generated during encryption is used to reverse the XOR operation, restoring the original data.
      </li>
    </ul>

    <h2>5. Security and Performance Analysis</h2>
    <ul>
      <li>
        <b>Security:</b> The hybrid approach benefits from the strengths of both AES and DES, providing a balanced solution for security and efficiency. 
        AES's larger key size and resistance to known cryptanalytic techniques offer robust protection, while DES adds a secondary layer of encryption to thwart potential attacks.
      </li>
      <li>
        <b>Performance:</b> While AES provides high-speed encryption, DES ensures compatibility with older systems. The additional use of a chaotic sequence ensures an unpredictable 
        encryption pattern, making cryptanalysis significantly more difficult.
      </li>
    </ul>
    <div className="image-container">
    <img src="/images/BD1.jpeg" alt="Encryption Process Flow Diagram" style={{ width: '100%', marginBottom: '20px' }} />
    <img src="/images/BD2.jpeg" alt="Decryption Process Flow Diagram" style={{ width: '100%', marginBottom: '20px' }} />

    </div>

    
    <h1>Why Hybrid AES-DES?</h1>
    <ul>
      <li>
        <b>Enhanced Security:</b>
        <ul>
          <li><b>AES Strength:</b> AES is one of the most secure encryption algorithms available. It supports key lengths of 128, 192, and 256 bits, making it resistant to brute-force attacks.</li>
          <li><b>DES Strength:</b> While DES is considered weak on its own due to its 56-bit key, it adds diversity to the encryption process when combined with AES, making the overall system harder to break.</li>
        </ul>
      </li>
      <li>
        <b>Layered Protection:</b> In a hybrid approach, data is first encrypted with AES and then re-encrypted with DES. This layered approach ensures that even if one encryption layer 
        is compromised, the other layer protects the data.
      </li>
      <li>
        <b>Legacy Compatibility:</b> Many older systems still use DES. Combining AES with DES provides a way to maintain backward compatibility while enhancing security.
      </li>
      <li>
        <b>Defense Against Cryptographic Attacks:</b> Combining two algorithms with different structures minimizes the risk of specific attacks, such as side-channel attacks, 
        as attackers must bypass both layers independently.
      </li>
      <li>
        <b>Efficiency Balance:</b> DES is faster than AES due to its simpler design but less secure. By using DES for smaller chunks of data and AES for more critical, larger data, 
        a balance between speed and security is achieved.
      </li>
    </ul>

    <h1>Why Logistic Map for Chaotic Sequence?</h1>
    <p>The logistic map is a mathematical function defined as:</p>
    <p><i>xn+1 = r ⋅ xn ⋅ (1 − xn)</i>, where <i>r</i> is the control parameter (commonly <i>r = 4</i>) and <i>x0</i> is the initial value.</p>
    <h2>Reasons for Using Logistic Map:</h2>
    <ul>
      <li><b>Chaotic Nature:</b> For <i>r = 4</i>, the logistic map exhibits chaotic behavior, meaning it is highly sensitive to initial conditions and generates unpredictable, non-repeating sequences.</li>
      <li><b>Pseudo-randomness:</b> The output of the logistic map resembles random numbers, making it ideal for cryptographic use, where unpredictability is essential.</li>
      <li><b>High Sensitivity:</b> A small change in the initial value <i>x0</i> results in drastically different sequences, making it extremely difficult for attackers to reproduce or predict the sequence.</li>
      <li><b>Efficient Computation:</b> The logistic map is computationally simple and lightweight, making it suitable for real-time applications or resource-constrained systems like IoT devices.</li>
      <li><b>Improved Entropy:</b> By modifying plaintext data with the chaotic sequence, the entropy (randomness) of the data increases, adding an additional layer of security.</li>
      <li><b>Integration with Encryption:</b> When combined with AES-DES encryption, the logistic map ensures that even before encryption, the data is obfuscated, making the system doubly secure.</li>
    </ul>

    <h1>Simple Overview of Tools Used</h1>
    <ul>
      <li>
        <b>OpenSSL:</b> OpenSSL is an open-source cryptographic library that provides a suite of encryption algorithms, including AES and DES. 
        It handles key generation, encryption, decryption, and secure random number generation efficiently. OpenSSL is widely used in secure communication protocols like SSL/TLS for data encryption.
      </li>
      <li>
        <b>C Programming Language:</b> The encryption system is implemented in C, which is known for its high performance and low-level control over system resources. 
        C is widely used for cryptographic applications due to its ability to perform bit-level operations and manage memory efficiently. It integrates well with cryptographic libraries like OpenSSL.
      </li>
      <li>
        <b>Logistic Map (Chaotic Sequence):</b> The Logistic Map is a mathematical function used to generate pseudo-random, chaotic sequences. 
        These sequences are sensitive to initial conditions, making them useful in cryptography for generating unpredictable sequences that add an additional layer of security to the encryption process.
      </li>
      <li>
        <b>File I/O Operations:</b> Standard C file handling functions (such as <code>fopen()</code>, <code>fread()</code>, <code>fwrite()</code>, and <code>fclose()</code>) are used to read input data from files 
        and write the encrypted or decrypted data to output files. This allows for seamless processing of data in the encryption and decryption workflows.
      </li>
    </ul>
    </div>
);
export default Methodology;


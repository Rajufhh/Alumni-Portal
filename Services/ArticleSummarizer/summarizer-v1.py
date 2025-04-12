import nltk
nltk.download('stopwords')
nltk.download('punkt_tab')

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize

text = """
Title: The Evolution and Applications of Convolutional Neural Networks (CNNs)

Convolutional Neural Networks (CNNs) have significantly shaped the progress of modern artificial intelligence, especially in the domains of computer vision and pattern recognition. Since their resurgence in the early 2010s, CNNs have become foundational models powering a wide range of applications, from facial recognition to autonomous driving.

At their core, CNNs are designed to process data that has a grid-like topology, making them ideal for analyzing visual imagery. The architecture is inspired by the visual cortex in animals, which consists of a complex arrangement of neurons that respond to overlapping regions in the visual field.

Historical Background

Although the concept of convolutional networks can be traced back to the 1980s with the Neocognitron and LeNet-5 by Yann LeCun, it was the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) in 2012 that brought CNNs to the forefront. The model that revolutionized the competition was AlexNet, developed by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton. AlexNet outperformed traditional machine learning algorithms by a significant margin using a deep CNN trained on GPUs.

CNN Architecture Overview

A standard CNN consists of several types of layers:

1. Convolutional Layers – Apply filters (kernels) to the input data to extract features like edges, textures, or complex patterns.
2. ReLU (Rectified Linear Unit) Activation – Introduces non-linearity into the model.
3. Pooling Layers – Reduce the spatial size of the representation, which decreases computational load and controls overfitting.
4. Fully Connected Layers – Operate at the end of the network to make final predictions based on the features extracted.

These components are stacked to form a hierarchical structure, allowing the model to learn increasingly abstract representations of the input.

Key Advancements in CNNs

After AlexNet, numerous enhancements were made to CNN architectures:

- VGGNet (2014) – Introduced by the Visual Geometry Group at Oxford, emphasized the importance of depth by using 3x3 filters.
- GoogLeNet (Inception networks) – Utilized inception modules that applied multiple filter sizes in parallel to improve representational power.
- ResNet (2015) – Brought in residual connections to solve the vanishing gradient problem, allowing extremely deep networks to be trained.

Other innovations include MobileNet for lightweight models optimized for mobile devices, and EfficientNet, which scales depth, width, and resolution in a balanced manner.

Applications of CNNs

CNNs have proven to be highly versatile and are applied in numerous fields:

1. Image Classification
CNNs classify images into categories with high accuracy. They're widely used in medical imaging for tasks like tumor detection or diabetic retinopathy classification.

2. Object Detection
Frameworks like YOLO (You Only Look Once) and Faster R-CNN enable real-time object detection in images and videos.

3. Image Segmentation
Semantic segmentation (e.g., U-Net) assigns a class label to each pixel. It's critical in fields such as autonomous driving and satellite image analysis.

4. Facial Recognition
CNNs form the backbone of facial verification systems used in devices and surveillance systems.

5. Style Transfer and Image Generation
CNNs have been adapted for creative purposes, such as neural style transfer and deep fake generation.

6. Video Analysis
CNNs combined with RNNs or 3D convolutions are used to extract spatial and temporal features from video frames.

Challenges and Limitations

Despite their success, CNNs have limitations:

- Data Dependency: CNNs often require large labeled datasets to perform well.
- Computational Cost: Training deep CNNs is resource-intensive and may require specialized hardware like GPUs or TPUs.
- Lack of Interpretability: CNNs are often considered black boxes, and explaining why they make certain decisions is non-trivial.
- Vulnerability to Adversarial Attacks: Small perturbations in input data can significantly affect performance.

The Future of CNNs

The future of CNNs is moving toward hybrid architectures that combine the strengths of different deep learning models. For example, Vision Transformers (ViTs) have shown that attention mechanisms can rival or outperform CNNs in certain vision tasks. There is also growing interest in self-supervised learning, where CNNs can learn useful features without labeled data.

Moreover, CNNs are being embedded into edge devices, enabling on-device AI applications with low latency and enhanced privacy.

Conclusion

Convolutional Neural Networks have revolutionized the way machines perceive the world. Their hierarchical learning structure, inspired by the human visual system, enables powerful feature extraction for a wide range of applications. While newer models like transformers may challenge their dominance, CNNs will continue to play a critical role in computer vision and beyond.

As the field evolves, ongoing research aims to improve the efficiency, interpretability, and robustness of CNNs, pushing the boundaries of what's possible in artificial intelligence."""

stopWords = set(stopwords.words('english'))
words = word_tokenize(text)

hash = dict()
for word in words:
    words = word.lower().strip()
    if (word in stopWords):
        continue
    if word in hash:
        hash[word] += 1
    else:
        hash[word] = 1

sentences = sent_tokenize(text)
sentenceValue = dict()

for sentence in sentences:
    for word, freq in hash.items():
        if (word in sentence.lower()):
            if sentence in sentenceValue:
                sentenceValue[sentence] += freq
            else:
                sentenceValue[sentence] = freq


sumValues = 0
for sentence in sentenceValue:
    sumValues += sentenceValue[sentence]

average = int(sumValues / len(sentenceValue) )     

summary = ''
for sentence in sentences:
    if (sentence in sentenceValue) and (sentenceValue[sentence] > (1.2 * average)):
        summary += ' ' + sentence

print(summary)        
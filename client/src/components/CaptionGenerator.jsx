import React, { useState } from "react";
import { generateCaption } from "../openai";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import { FiCopy, FiThumbsUp } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';

const CaptionGenerator = () => {
  const [occasion, setOccasion] = useState("");
  const [caption, setCaption] = useState("");
  const [liked, setLiked] = useState(false);

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleGenerateCaption = async () => {
    const generatedCaption = await generateCaption(occasion);
    if (generatedCaption) {
      setCaption(generatedCaption);
    }
  };

  const handleRegenerateCaption = async () => {
    const generatedCaption = await generateCaption(occasion);
    if (generatedCaption) {
      setCaption(generatedCaption);
      setLiked(false);
    }
  };

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(caption);
  }

  const handleLike = () => {
    setLiked(true);
    setTimeout(() => {
      setLiked(false);
      setOccasion("");
      setCaption("");
    }, 1000);
  }

  return (
    <Card style={{ maxWidth: "50%", margin: "5% auto" }}>
      <CardBody>
        <Form onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label for="occasion">What is the occasion you want to get a caption for:</Label>
            <Input type="text" id="occasion" value={occasion} onChange={handleOccasionChange} placeholder="cool, happy, sunny day etc" required minLength={3} />
          </FormGroup>
          {!liked && !caption && <Button color="primary" onClick={handleGenerateCaption} disabled={occasion.length < 3}>
            Generate Caption
          </Button>}
          {caption && !liked && (
            <div>
              <p>Caption: {caption}</p>
              <Button color="secondary" size="sm" style={{marginRight: "2%"}} onClick={handleCopyCaption}>
                <FiCopy />
              </Button>
              <Button color="primary" size="sm" onClick={handleRegenerateCaption}>
                Regenerate Caption
              </Button>
              <Button color="success" size="sm" onClick={handleLike} style={{marginLeft: "2%"}}>
                <FiThumbsUp />
              </Button>
            </div>
          )}
          {liked && <p>Enjoy your caption!</p>}
        </Form>
      </CardBody>
    </Card>
  );
};

export default CaptionGenerator;

import React from 'react';
import Form from 'react-bootstrap/Form'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0); /// this is currently not working

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Write Your Review</h2>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p>
            <button type="button" onClick={handleClose}>
              Close
            </button> */}

            <div>
              Subtitle ---> "name of product"
            </div>

            <div>
              <Rating
                name="simple-controlled"
                value={value}
                precision={0.25}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
            />
            </div>

            <div>
            <p>Characteristics</p>
            <p>size</p>
              <input type="radio" name="size"/>
              <label>1</label>
              <input type="radio" name="size"/>
              <label>2</label>
              <input type="radio" name="size"/>
              <label>3</label>
              <input type="radio" name="size"/>
              <label>4</label>
              <input type="radio" name="size"/>
              <label>5</label>
            </div>

            <div>
            <p>width</p>
              <input type="radio" name="width"/>
              <label>1</label>
              <input type="radio" name="width"/>
              <label>2</label>
              <input type="radio" name="width"/>
              <label>3</label>
              <input type="radio" name="width"/>
              <label>4</label>
              <input type="radio" name="width"/>
              <label>5</label>
            </div>

            <div>
            <p>comfort</p>
              <input type="radio" name="comfort"/>
              <label>1</label>
              <input type="radio" name="comfort"/>
              <label>2</label>
              <input type="radio" name="comfort"/>
              <label>3</label>
              <input type="radio" name="comfort"/>
              <label>4</label>
              <input type="radio" name="comfort"/>
              <label>5</label>
            </div>

            <div>
            <p>quality</p>
              <input type="radio" name="quality"/>
              <label>1</label>
              <input type="radio" name="quality"/>
              <label>2</label>
              <input type="radio" name="quality"/>
              <label>3</label>
              <input type="radio" name="quality"/>
              <label>4</label>
              <input type="radio" name="quality"/>
              <label>5</label>
            </div>

            <div>
            <p>length</p>
              <input type="radio" name="length"/>
              <label>1</label>
              <input type="radio" name="length"/>
              <label>2</label>
              <input type="radio" name="length"/>
              <label>3</label>
              <input type="radio" name="length"/>
              <label>4</label>
              <input type="radio" name="length"/>
              <label>5</label>
            </div>

            <div>
            <p>fit</p>
              <input type="radio" name="fit"/>
              <label>1</label>
              <input type="radio" name="fit"/>
              <label>2</label>
              <input type="radio" name="fit"/>
              <label>3</label>
              <input type="radio" name="fit"/>
              <label>4</label>
              <input type="radio" name="fit"/>
              <label>5</label>
            </div>

            <div>
              <p>Do you recommend this product?</p>
              <input type="radio" id="male" name="recommend" value="male"/>
              <label>Yes</label>
              <input type="radio" id="female" name="recommend" value="female"/>
              <label>No</label>
            </div>

            <Form>
              <div>Review Body</div>
              <Form.Group controlId="formBasicBody">
                <Form.Label></Form.Label>
                <textarea rows="5" cols="80" maxLength="1000" placeholder="Why did you like the product or not?"></textarea>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>

            <Form>
              <Form.Group controlId="formBasicNickname">
                <Form.Label>What is your nickname</Form.Label>
                <input type="text" id="reviewInput" placeholder="Example:jackson11"></input>
                {/* <textarea rows="1" cols="40" type="nickname" maxLength="60" placeholder="Example:jackson11"></textarea> */}
                <Form.Text className="text-muted">
                For privacy reasons, do not use your full name or email address
                </Form.Text>
              </Form.Group>
            </Form>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <input type="text" id="reviewInput" placeholder="Example:jackson11@gmail.com"></input>
                {/* <textarea rows="1" cols="40" type="email" maxLength="60" placeholder="Example:jackson11@gmail.com"></textarea> */}
                <Form.Text className="text-muted">
                For authentication reasons, you will not be emailed
                </Form.Text>
              </Form.Group>
            </Form>

            <button>Submit review</button>
          </div>
        </Fade>
      </Modal >
    </div >
  );
}
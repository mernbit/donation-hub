import { Button, Col, Form, Row, Select, Upload } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { PlusOutlined } from "@ant-design/icons";

const initalState = {
  title: "",
  goalAmount: "",
  category: "",
  endDate: "",
  image: [],
  description: "",
};

const AddCampaign = () => {
  const [state, setState] = useState(initalState);
  const [images, setImages] = useState([]);
  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { title, goalAmount, category, endDate, image, description } = state;

    title = title.trim();
    goalAmount = goalAmount.trim();
    category = category.trim();
    endDate = endDate.trim();
    description = description.trim();

    if (
      !title ||
      !goalAmount ||
      !category ||
      !endDate ||
      !image ||
      !description
    ) {
      return;
    }

    const formData = {
      title,
      goalAmount,
      category,
      endDate,
      image: images,
      description,
    };
  };

  return (
    <div className="mx-auto p-3 md:max-w-[80%] w-full">
      <div className="my-10">
        <h2 className="text-4xl text-center text-primary font-bold">
          Add Campaign
        </h2>
      </div>
      <div className="my-10 shadow-lg border border-gray-200 rounded-xl lg:max-w-[80%] max-w-[100%] mx-auto w-full p-10">
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Title">
                <input
                  placeholder="Title"
                  name="title"
                  className="input-field"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Goal Amount">
                <input
                  placeholder="Goal Amount"
                  name="goalAmount"
                  className="input-field"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Category">
                <Select
                  placeholder="Select Category"
                  className="m-3"
                  onChange={(val) => setState((s) => ({ ...s, category: val }))}
                >
                  <Select.Option value="education">Education</Select.Option>
                  <Select.Option value="health">Health</Select.Option>
                  <Select.Option value="disaster">Disaster</Select.Option>
                  <Select.Option value="others">Others</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="End Date">
                <input
                  type="datetime-local"
                  className="border border-gray-300 py-1 px-3 outline-none w-full rounded-lg"
                  name="endDate"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Image">
                <Upload
                  accept=".png, .jpg, .jpeg,.webp"
                  onChange={(file) => setImages(file.fileList)}
                  multiple
                  listType="picture-card"
                >
                  <PlusOutlined />
                </Upload>
              </Form.Item>
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Form.Item label="Description" className="editor-box">
                <ReactQuill
                  onChange={(val) =>
                    setState((s) => ({ ...s, description: val }))
                  }
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [{ align: [] }],
                    ],
                  }}
                  formats={[
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "align",
                  ]}
                  theme="snow"
                />
              </Form.Item>
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              <div className="text-center flex gap-5 items-center justify-center">
                <button
                  // onClick={handleCancel}
                  className="btn-beta !px-10 transition-150"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="btn-primary !px-10 transition-150"
                >
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddCampaign;

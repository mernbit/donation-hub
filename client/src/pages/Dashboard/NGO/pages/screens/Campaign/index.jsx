import {
  Button,
  Col,
  Form,
  Image,
  message,
  Row,
  Select,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Loading3QuartersOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useParams } from "react-router-dom";

const Campaign = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [state, setState] = useState({
    title: "",
    goalAmount: "",
    category: "",
    endDate: "",
    description: "",
  });

  const [fileList, setFileList] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  // Load campaign
  const getCampaign = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/campaign/get/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setCampaign(res.data.campaign);
    } catch (error) {
      console.error(error);
      message.error("Failed to load campaign");
    }
  };

  useEffect(() => {
    getCampaign();
  }, []);

  // Map API images to Antd Upload fileList
  const mapImagesToFileList = (images) =>
    images.map((url, index) => ({
      uid: `-${index}`,
      name: `image-${index}`,
      status: "done",
      url,
    }));

  // Populate form when campaign loads
  useEffect(() => {
    if (campaign) {
      setState({
        title: campaign.title || "",
        goalAmount: campaign.goalAmount || "",
        category: campaign.category || "",
        endDate: campaign.endDate || "",
        description: campaign.description || "",
      });

      setFileList(mapImagesToFileList(campaign.images || []));
    }
  }, [campaign]);

  // Handle input change
  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Convert file to base64 for preview
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // Handle preview for both new and existing images
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  // Upload button
  const uploadButton = (
    <button
      style={{ border: 0, background: "none" }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, goalAmount, category, endDate, description } = state;

    if (
      !title.trim() ||
      !goalAmount.trim() ||
      !category.trim() ||
      !endDate.trim() ||
      fileList.length === 0 ||
      !description.trim()
    ) {
      return message.error("All fields are required");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("goalAmount", goalAmount);
    formData.append("category", category);
    formData.append("endDate", endDate);
    formData.append("description", description);

    fileList.forEach((f) => {
      if (f.originFileObj) formData.append("images", f.originFileObj);
      else if (f.url) formData.append("existingImages", f.url);
    });

    try {
      setIsProcessing(true);
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/campaign/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      message.success("Campaign updated successfully");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to update campaign");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="mx-auto p-3 md:max-w-[80%] w-full">
      <div className="my-10">
        <h2 className="text-4xl text-center text-primary font-bold">
          Update Campaign
        </h2>
      </div>

      <div className="my-10 shadow-lg border border-gray-200 rounded-xl lg:max-w-[80%] mx-auto w-full p-10">
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Title">
                <input
                  placeholder="Title"
                  name="title"
                  value={state.title}
                  className="input-field"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>

            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Goal Amount (USD)">
                <input
                  placeholder="Goal Amount"
                  name="goalAmount"
                  type="number"
                  value={state.goalAmount}
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
                  value={state.category}
                  onChange={(val) =>
                    setState((s) => ({ ...s, category: val }))
                  }
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
                  value={state.endDate}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Images">
                <Upload
                  accept=".png,.jpg,.jpeg,.webp"
                  beforeUpload={() => false}
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={({ fileList }) => setFileList(fileList)}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>

                {previewImage && (
                  <Image
                    wrapperStyle={{ display: "none" }}
                    preview={{
                      visible: previewOpen,
                      onVisibleChange: (visible) => setPreviewOpen(visible),
                      afterOpenChange: (visible) =>
                        !visible && setPreviewImage(""),
                    }}
                    src={previewImage}
                  />
                )}
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Description">
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
                  value={state.description}
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

            <Col span={24}>
              <div className="text-center flex gap-5 items-center justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="btn-primary !px-10 transition-150"
                >
                  {isProcessing ? (
                    <p className="!animate-spin">
                      <Loading3QuartersOutlined />
                    </p>
                  ) : (
                    "Update"
                  )}
                </button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Campaign;

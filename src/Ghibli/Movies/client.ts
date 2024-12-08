import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MOVIES_API = `${REMOTE_SERVER}/api/movies`;

export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${MOVIES_API}/${courseId}/users`);
  return response.data;
 };
 

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(MOVIES_API, course);
  return data;
 };
 

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(
      `${MOVIES_API}/${courseId}/assignments`,
      assignment
    );
  return response.data;
};
  

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios
      .get(`${MOVIES_API}/${courseId}/assignments`);
    return response.data;
  };
  
export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(
      `${MOVIES_API}/${courseId}/modules`,
      module
    );
    return response.data;
};
  
export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${MOVIES_API}/${courseId}/modules`);
  return response.data;
 };
 
  
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(MOVIES_API);
  return data;
};
export const updateCourse = async (movie: any) => {
    const { data } = await axiosWithCredentials.put(`${MOVIES_API}/${movie._id}`, movie);
    return data;
  };
  
export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${MOVIES_API}/${id}`);
    return data;
};
  